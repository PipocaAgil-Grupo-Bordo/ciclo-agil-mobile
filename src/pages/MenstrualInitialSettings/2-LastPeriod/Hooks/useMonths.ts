import { MonthsType } from "../type";

/**
 * An array containing the name of months
 */
const useMonths = () => {
  const currentYear = new Date().getFullYear();
  const months: MonthsType[] = Array.from({ length: 12 }, (_, index) => {
    const date = new Date(currentYear, index, 1);
    const monthName = date.toLocaleString("pt-BR", { month: "long" });
    return (monthName.charAt(0).toUpperCase() + monthName.slice(1)) as MonthsType;
  });

  return months;
};

export default useMonths;
