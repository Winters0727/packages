import { useMergeSort } from "./sort";

describe("병합정렬", () => {
  const { divideValues, mergeValues, mergeSort } = useMergeSort();

  test("divideValues 함수 테스트", () => {
    expect(divideValues([])).toEqual([[], []]);
    expect(divideValues([4, 3, 2, 1])).toEqual([
      [4, 3],
      [2, 1],
    ]);
  });

  test("mergeValues 함수 테스트", () => {
    expect(mergeValues([], [])).toEqual([]);
    expect(mergeValues([3, 2], [4, 1])).toEqual([3, 2, 4, 1]);
  });

  test("mergeSort 함수 테스트", () => {
    expect(mergeSort([])).toEqual([]);
    expect(mergeSort([4, 3, 2, 1])).toStrictEqual([1, 2, 3, 4]);
    expect(mergeSort([5, 6, 3, 4, 1, 2])).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });
});
