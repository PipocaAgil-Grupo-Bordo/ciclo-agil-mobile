import { menstrualApi } from "@services/menstrualApi";
import { IMenstrualPeriod } from "@type/menstrual";
import { useState, useCallback } from "react";
import { Alert } from "react-native";

export function useMenstrualCalendar(accessToken: string | undefined) {
  const [selectedDates, setSelectedDates] = useState<string[]>([]);
  const [selectedDatesInfo, setSelectedDatesInfo] = useState<{ id: number; date: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [futureDateModalVisible, setFutureDateModalVisible] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);
  const [pendingDate, setPendingDate] = useState<string | null>(null);

  const formatDateList = (menstrualPeriods: IMenstrualPeriod[]): string[] => {
    return menstrualPeriods.flatMap((period) => period.dates.map((d) => d.date));
  };

  const formatDateInfoList = (
    menstrualPeriods: IMenstrualPeriod[]
  ): { id: number; date: string }[] => {
    return menstrualPeriods.flatMap((period) =>
      period.dates.map((d) => ({ id: d.id, date: d.date }))
    );
  };

  const addMenstrualPeriodDate = useCallback(
    async (date: string) => {
      if (!accessToken) return null;
      try {
        const response = await menstrualApi.createPeriodDate({ date }, accessToken);
        return { id: response.data.id, date: response.data.date };
      } catch {
        Alert.alert("Erro", "Não foi possível adicionar a data. Tente novamente.");
        return null;
      }
    },
    [accessToken]
  );

  const deleteMenstrualPeriodDate = useCallback(
    async (date: string) => {
      if (!accessToken) return;
      const dateInfo = selectedDatesInfo.find((info) => info.date === date);
      if (!dateInfo) return;

      const updatedSelectedDates = selectedDates.filter((d) => d !== date);
      const updatedSelectedDatesInfo = selectedDatesInfo.filter((info) => info.date !== date);
      setSelectedDates(updatedSelectedDates);
      setSelectedDatesInfo(updatedSelectedDatesInfo);

      try {
        await menstrualApi.deletePeriodDate(dateInfo.id, accessToken);
      } catch {
        Alert.alert("Erro", "Não foi possível deletar a data. Tente novamente.");
        setSelectedDates(selectedDates);
        setSelectedDatesInfo(selectedDatesInfo);
      }
    },
    [accessToken, selectedDates, selectedDatesInfo]
  );

  const calculateDateGap = useCallback(
    (newDate: string): number => {
      if (selectedDates.length === 0) return 0;
      const newDateObj = new Date(newDate);
      let minDiff = Infinity;

      for (const date of selectedDates) {
        const dateObj = new Date(date);
        if (dateObj <= newDateObj) {
          const diff = Math.abs(newDateObj.getTime() - dateObj.getTime());
          if (diff < minDiff) minDiff = diff;
        }
      }
      return minDiff === Infinity ? 0 : minDiff / (1000 * 3600 * 24) - 1;
    },
    [selectedDates]
  );

  const fillPreviousDates = useCallback(
    async (date: string) => {
      const selectedDate = new Date(date);
      let closestDate = null;
      let minDiff = Infinity;

      for (const d of selectedDates) {
        const dateObj = new Date(d);
        const diff = Math.abs(selectedDate.getTime() - dateObj.getTime());
        if (diff < minDiff) {
          minDiff = diff;
          closestDate = new Date(d);
        }
      }

      if (!closestDate) return;

      const fillDates = (start: Date, end: Date) => {
        const dates = [];
        for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
          dates.push(d.toISOString().split("T")[0]);
        }
        return dates;
      };

      const datesToFill =
        selectedDate < closestDate
          ? fillDates(selectedDate, closestDate)
          : fillDates(new Date(closestDate.setDate(closestDate.getDate() + 1)), selectedDate);
      const newDatesInfo: { id: number; date: string }[] = [];

      await Promise.all(
        datesToFill.map(async (dateToAdd) => {
          if (!selectedDates.includes(dateToAdd)) {
            const response = await addMenstrualPeriodDate(dateToAdd);
            if (response) newDatesInfo.push(response);
          }
        })
      );

      if (newDatesInfo.length > 0) {
        const allNewDates = newDatesInfo.map((info) => info.date);
        setSelectedDates((prev) => Array.from(new Set([...prev, ...allNewDates])).sort());
        setSelectedDatesInfo((prev) => [...prev, ...newDatesInfo]);
      }
    },
    [selectedDates, addMenstrualPeriodDate]
  );

  const handleDayPress = useCallback(
    async (day: { dateString: string }) => {
      const date = day.dateString;
      const today = new Date().toISOString().split("T")[0];

      if (date > today) {
        setFutureDateModalVisible(true);
        return;
      }

      if (!selectedDates.includes(date)) {
        const gap = calculateDateGap(date);
        if (gap >= 1 && gap <= 7) {
          setPendingDate(date);
          setModalVisible(true);
        } else {
          const newDateInfo = await addMenstrualPeriodDate(date);
          if (newDateInfo) {
            setSelectedDates((prev) => [...prev, date].sort());
            setSelectedDatesInfo((prev) => [...prev, newDateInfo]);
          }
        }
      } else {
        await deleteMenstrualPeriodDate(date);
      }
    },
    [selectedDates, calculateDateGap, addMenstrualPeriodDate, deleteMenstrualPeriodDate]
  );

  const handleModalResponse = useCallback(
    async (response: "yes" | "no") => {
      setModalLoading(true);
      if (response === "yes" && pendingDate) {
        await fillPreviousDates(pendingDate);
      } else if (response === "no" && pendingDate) {
        const newDateInfo = await addMenstrualPeriodDate(pendingDate);
        if (newDateInfo) {
          setSelectedDates((prev) => [...prev, pendingDate].sort());
          setSelectedDatesInfo((prev) => [...prev, newDateInfo]);
        }
      }
      setModalLoading(false);
      setModalVisible(false);
      setPendingDate(null);
    },
    [pendingDate, fillPreviousDates, addMenstrualPeriodDate]
  );

  const fetchPeriods = useCallback(
    async (params: { year?: number; month?: number }, mode: "replace" | "merge") => {
      if (!accessToken) return;
      setIsLoading(true);
      try {
        const response = await menstrualApi.getMenstrualPeriods({ token: accessToken, ...params });
        const dates = formatDateList(response.data);
        const info = formatDateInfoList(response.data);

        if (mode === "replace") {
          setSelectedDates(dates);
          setSelectedDatesInfo(info);
        } else {
          setSelectedDates((prev) => Array.from(new Set([...prev, ...dates])).sort());
          setSelectedDatesInfo((prev) => {
            const existingIds = new Set(prev.map((i) => i.id));
            const newInfo = info.filter((i) => !existingIds.has(i.id));
            return [...prev, ...newInfo];
          });
        }
      } catch (error) {
        console.error("Erro ao buscar os dados do calendário:", error);
        Alert.alert("Erro", "Não foi possível buscar os dados do calendário.");
      } finally {
        setIsLoading(false);
      }
    },
    [accessToken]
  );

  return {
    selectedDates,
    isLoading,
    modalVisible,
    futureDateModalVisible,
    modalLoading,
    setModalVisible,
    setFutureDateModalVisible,
    handleDayPress,
    handleModalResponse,
    fetchPeriods
  };
}
