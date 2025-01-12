import { getDateRange } from "./calculate-dates.ts";

export const getLongLocalDate = (date: Date): string => {
  // must declare type of options to use options object in toLocaleDateString
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return date.toLocaleDateString(undefined, options);
};

export const getShortLocalDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return date.toLocaleDateString(undefined, options);
};

export const getFormattedDateRange = (rangeLength: number) => {
  return getDateRange(rangeLength).map((date) => date.toLocaleDateString());
};
