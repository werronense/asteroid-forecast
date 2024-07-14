const formatMillions = (distance: string): string => {
  return (+distance / 1000000).toFixed(2);
};

export const formatMillionsOfKms = (distance: string): string => {
  return `${formatMillions(distance)} million kilometers`;
};
