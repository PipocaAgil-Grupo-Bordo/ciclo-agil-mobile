import { useEffect, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { Calendar, DateData, LocaleConfig } from 'react-native-calendars';
import { Feather } from '@expo/vector-icons';
import { styles } from './style';
import { ColorScheme } from '@styles/globalStyles';
import { ptBR } from '../../../utils/localeCalendarConfig';
import { useTokenContext } from "@context/useUserToken";
import { menstrualApi } from '@services/menstrualApi';
import { ICalendarDateInfo, IMenstrualPeriod } from '@type/menstrual';

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

// Function that returns styles based on cycle
function currentCycle(cycle: string) {
  if (cycle === 'firstDay') {
    return {
      customStyles: {
        container: {
          borderWidth: 1.9,
          borderColor: '#DCC1EE',
          backgroundColor: '#DCC1EE',
        },
        text: {
          color: '#000', // Text color on the first day
        },
      },
    };
  }

  if (cycle === 'fertile') {
    return {
      customStyles: {
        container: {
          borderWidth: 1.9,
          borderStyle: 'dotted',
          borderColor: '#8E37C9',
        },
        text: {
          color: '#000', // Text color on fertile days
        },
      },
    };
  }

  return {};
}

function CalendarApp() {
  const [selectedDates, setSelectedDates] = useState<string[]>([]);
  const [selectedDatesInfo, setSelectedDatesInfo] = useState<{ id: number, date: string }[]>([])
  const { accessToken } = useTokenContext();


  useEffect(() => {
    fetchMenstrualPeriods()
  }, [])

  const fetchMenstrualPeriods = async () => {
    const currentDate = new Date()
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth() + 1
    if (accessToken) {
      const response = await menstrualApi.getMenstrualPeriods(year, accessToken, month)
      setSelectedDatesInfo(formatDateInfoList(response.data))
      const dates = formatDateList(response.data)
      setSelectedDates(dates)
    }
  }

  const handleDayPress = async (day: DateData) => {
    const date = day.dateString;
    if (accessToken) {
      if (!selectedDates.includes(date)) {
      return addMenstrualPeriodDate(date)
      }
      return deleteMenstrualPeriodDate(date)
    }
  };

  const addMenstrualPeriodDate = async (date: string) => {
    setSelectedDates([...selectedDates, date]);
    try {
      if (accessToken) {
        const response = await menstrualApi.createPeriodDate({ date }, accessToken);
        setSelectedDatesInfo([...selectedDatesInfo, { id: response.data.id, date: response.data.date }])
      }
    } catch (error) {
      Alert.alert('Erro ao adicionar data, tente novamente!')
      const currentSelectedDates = [...selectedDates]
      const currentSelectedDatesInfo = [...selectedDatesInfo]
      currentSelectedDatesInfo.pop()
      setSelectedDatesInfo(currentSelectedDatesInfo)
      currentSelectedDates.pop()
      setSelectedDates(currentSelectedDates)
    }
  }

  const deleteMenstrualPeriodDate = async (date: string) => {
    const dateInfo = selectedDatesInfo.find((info) => info.date === date);
    if (!dateInfo) return; // Adiciona uma verificação caso não encontre a data.
    try {
      if (accessToken) {
        // Filtrar para remover a data correta
        const updatedSelectedDates = selectedDates.filter((selectedDate) => selectedDate !== date);
        const updatedSelectedDatesInfo = selectedDatesInfo.filter((info) => info.date !== date);
        setSelectedDates(updatedSelectedDates);
        setSelectedDatesInfo(updatedSelectedDatesInfo);
  
        // Chama a API para deletar
        await menstrualApi.deletePeriodDate(dateInfo.id, accessToken);
      }
    } catch (error) {
      // Reverter a operação em caso de erro
      Alert.alert('Erro ao deletar data, tente novamente!');
      setSelectedDates([...selectedDates, date]);
      setSelectedDatesInfo([...selectedDatesInfo, dateInfo]);
    }
  };
  

  const formatDateList = (menstrualPeriods: IMenstrualPeriod[]) => {
    return menstrualPeriods.flatMap((menstrualPeriod: IMenstrualPeriod) => {
      return menstrualPeriod.dates.map((menstrualPeriodDate) => menstrualPeriodDate.date)
    })
  }

  const formatDateInfoList = (menstrualPeriods: IMenstrualPeriod[]) => {
    return menstrualPeriods.flatMap((menstrualPeriod: IMenstrualPeriod) => {
      return menstrualPeriod.dates.map((menstrualPeriodDate) => {
        return { id: menstrualPeriodDate.id, date: menstrualPeriodDate.date }
      }
      )
    })
  }

  const handleMonthChange = async (dateInfo: ICalendarDateInfo) => {
    setSelectedDates([])
    if (accessToken) {
      const response = await menstrualApi.getMenstrualPeriods(dateInfo.year, accessToken, dateInfo.month)
      const dates = formatDateList(response.data)
      setSelectedDates(dates)
    }
  }

  // Setting up scheduled dates
  const markedDates = selectedDates.reduce((acc, date, index) => {
    if (index === 0) {
      // The first day selected is given the "firstDay" styles
      acc[date] = {
        ...currentCycle('firstDay'),
        customStyles: currentCycle('firstDay').customStyles, // Apply customStyles
      };
    } else {
      // Os outros dias recebem estilos de "fertile"
      acc[date] = {
        ...currentCycle('fertile'),
        customStyles: currentCycle('fertile').customStyles,
      };
    }
    return acc;
  }, {} as Record<string, any>);
  return (
    <View style={styles.container}>
      <Calendar
        style={styles.calendar}
        markingType="custom" // Mode that allows customStyles
        renderArrow={(direction: 'right' | 'left') => (
          <Feather size={24} color="#e8e8e8" name={`chevron-${direction}`} />
        )}
        headerStyle={{
          borderBottomWidth: 1,
          borderBottomColor: '#e8e8e8',
          paddingBottom: 10,
          marginBottom: 10,
        }}
        theme={{
          textMonthFontSize: 18,
          todayTextColor: ColorScheme.circle?.primary,
          selectedDayBackgroundColor: ColorScheme.circle?.primary,
          selectedDayTextColor: '#000',
          arrowColor: '#e8e8e8',
          textDayStyle: { color: '#000' },
          arrowStyle: {
            margin: 0,
            padding: 0,
          },
        }}
        maxDate={new Date().toDateString()}
        hideExtraDays
        onMonthChange={handleMonthChange}
        onDayPress={handleDayPress}
        markedDates={markedDates} // Applying the dates marked with customStyles
      />

      <Text style={styles.selected}>
        Data selecionada: {selectedDates.join(', ')}
      </Text>
    </View>
  );
}

export default CalendarApp;
