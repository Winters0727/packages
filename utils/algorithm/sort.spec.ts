import { useMergeSort } from "./sort";

describe("병합정렬", () => {
  const { divideValues, mergeValues, mergeSort } = useMergeSort();

  test("값 나누기", () => {
    expect(divideValues([])).toEqual([]);
    expect(divideValues([4, 3, 2, 1])).toContainEqual([[1], [2], [3], [4]]);
  });

  test("값 합치기", () => {
    expect(mergeValues([], [])).toEqual([]);
    expect(mergeValues([3, 2], [4, 1])).toStrictEqual([1, 2, 3, 4]);
  });

  test("병합 및 정렬", () => {
    expect(mergeSort([])).toEqual([]);
    expect(mergeSort([4, 3, 2, 1])).toStrictEqual([1, 2, 3, 4]);
  });
});
