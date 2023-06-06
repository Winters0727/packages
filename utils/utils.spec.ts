import { createRange } from "./utils";

test("createRange 함수 테스트", () => {
  expect(createRange(5)).toEqual([0, 1, 2, 3, 4]);
  expect(createRange(5, 2)).toEqual([2, 3, 4]);
  expect(createRange(5, 1, 2)).toEqual([1, 3]);
});
