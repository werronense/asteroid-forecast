const daysToMilliseconds = (days: number): number => {
  return days * (24 * 60 * 60 * 1000);
};

const getDate = (daysFromToday: number): Date => {
  return new Date(Date.now() + daysToMilliseconds(daysFromToday));
};

const getDateRange = (rangeLength: number) => {
  return [getDate(0), getDate(rangeLength - 1)];
};

export { daysToMilliseconds, getDate, getDateRange };
