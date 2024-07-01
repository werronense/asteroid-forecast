const daysToMilliseconds = (days: number): number => {
  return days * (24 * 60 * 60 * 1000);
};

const getDate = (daysFromToday: number): Date => {
  return new Date(Date.now() + daysToMilliseconds(daysFromToday));
};

export { daysToMilliseconds, getDate };
