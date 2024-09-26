const currentMonth = new Date().toLocaleString("pt-BR", { month: "long" });
const currentYear = new Date().getFullYear();

function formatBirthdateToISODate(birthdate: string) {
  // Remove '/' from the birthdate string
  const birthdateWithoutSlash = birthdate.replace(/\//g, "");

  // Format the birthdate string to ISO date format (YYYY-MM-DD)
  const birthdateStringHighFormat = [
    birthdateWithoutSlash.slice(4),
    birthdateWithoutSlash.slice(2, 4),
    birthdateWithoutSlash.slice(0, 2)
  ].join("-");

  return birthdateStringHighFormat;
}

function selectWeek(date: Date) {
  return Array(7)
    .fill(new Date(date))
    .map((el, idx) => new Date(el.setDate(el.getDate() - el.getDay() + idx)).getDate());
}

export const dateHelper = {
  currentYear,
  currentMonth,
  formatBirthdateToISODate,
  selectWeek
};
