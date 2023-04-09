export const MAX_MONTHS_DAYS = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};

export function isLeapYear(year) {
  return year % 4 === 0;
}

export function getPassedTime(year, month, day) {
  if (isLeapYear(year)) {
    MAX_MONTHS_DAYS[2] = 29;
  }
  const birthDate = new Date(year, month - 1, day);
  const now = new Date();

  let years = now.getUTCFullYear() - birthDate.getUTCFullYear();
  let months = now.getUTCMonth() - birthDate.getUTCMonth();
  let days = now.getUTCDate() - birthDate.getUTCDate();

  if (months < 0) {
    years--;
    months += 12;
  }
  if (days < 0) {
    if (months > 0) {
      months--;
    } else {
      years--;
      months = 11;
    }
    days += MAX_MONTHS_DAYS[+month];
  }

  return { years, months, days };
}
