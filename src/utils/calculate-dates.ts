const weekOfMilliseconds: number = 7 * 24 * 60 * 60 * 1000;

const getStartDate = (): Date => {
  // today's date
  return new Date(Date.now());
};

const getEndDate = (): Date => {
  // one week from today's date
  return new Date(Date.now() + weekOfMilliseconds);
};

export { getStartDate, getEndDate };
