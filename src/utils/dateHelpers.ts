function formatBirthdateToISODate(birthdate: string) {
  // Remove '/' from the birthdate string
  const birthdateWithoutSlash = birthdate.replace(/\//g, '');

  // Format the birthdate string to ISO date format (YYYY-MM-DD)
  const birthdateStringHighFormat = [
    birthdateWithoutSlash.slice(4),
    birthdateWithoutSlash.slice(2, 4),
    birthdateWithoutSlash.slice(0, 2)
  ].join("-");

  return birthdateStringHighFormat;
}

export const dateHelper = {
  formatBirthdateToISODate
};
