const { useMergeSort } = require("./sort");

jest.mock("./sort");

beforeEach(() => {
  useMergeSort.mockClear();
});

describe("병합정렬", () => {
  const { divideValues, mergeValues, mergeSort } = useMergeSort();

  test("값 나누기", () => {
    expect(divideValues([])).toBe([]);
    // expect(divideValues([3,2]))
  });
});
