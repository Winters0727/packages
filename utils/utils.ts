export const createRange = (
  end: number,
  start: number = 0,
  interval: number = 1
) =>
  Array.from({ length: Math.floor((end - start) / interval) })
    .fill(0)
    .map((_, index) => start + index * interval);
