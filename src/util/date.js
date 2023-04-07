const MAX_MONTHS_DAYS = {
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

export function validateDate(year, month, day) {
  const error = {
    day: checkEmptiness(day) || validateDay(day),
    month: checkEmptiness(month) || validateMonth(month),
    year: checkEmptiness(year) || validateYear(year),
    isInvalidDate: false,
  };

  if (!error.day && !error.month && !error.year) {
    const date = Date.UTC(year, month - 1, day);
    const now = Date.now();
    if (date > now) {
      error.year = 'Must be in the past';
      return error;
    }
    if (day > MAX_MONTHS_DAYS[+month]) {
      error.day = 'Must be a valid date';
      error.isInvalidDate = true;
    }
    if (!error.year && +month === 2 && +day === 29 && !isLeapYear(year)) {
      error.day = 'Must be a valid date';
      error.isInvalidDate = true;
    }
  }
  return error;
}

function checkEmptiness(value) {
  return value === '' ? 'This field is required' : null;
}

function validateDay(day) {
  if (day >= 1 && day <= 31) {
    return null;
  }
  return 'Must be a valid day';
}

function validateMonth(month) {
  if (month >= 1 && month <= 12) {
    return null;
  }
  return 'Must be a valid month';
}

function validateYear(year) {
  const today = new Date();
  if (year <= today.getUTCFullYear()) {
    return null;
  }
  return 'Must be in the past';
}

function isLeapYear(year) {
  return year % 4 === 0;
}