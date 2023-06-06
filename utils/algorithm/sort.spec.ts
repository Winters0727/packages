import { useMergeSort } from "./sort";

describe("병합정렬", () => {
  const { divideValues, mergeValues, mergeSort } = useMergeSort();

  test("값 나누기", () => {
    expect(divideValues([])).toStrictEqual([]);
  });

  test("값 합치기", () => {
    expect(mergeValues([])).toStrictEqual([]);
  });

  test("병합 및 정렬", () => {
    expect(mergeSort([])).toStrictEqual([]);
  });
});
