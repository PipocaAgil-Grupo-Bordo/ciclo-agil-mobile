function formatBirthdateToISODate(birthdate: string) {
  const birthdateStringHighFormat = [
    birthdate.slice(4),
    birthdate.slice(2, 4),
    birthdate.slice(0, 2)
  ].join("-");
  return birthdateStringHighFormat;
}

const dateHelper = {
  formatBirthdateToISODate
};

export default dateHelper;
