type BubbleSort = {
  swap: (arr: number[], index1: number, index2: number) => number[];
  bubbleSort: (arr: number[]) => number[];
};

type MergeSort = {
  mergeValues: (arr1: number[], arr2: number[]) => number[];
  divideValues: (arr: number[]) => [number[], number[]];
  mergeSort: (arr: number[]) => number[];
};

export const useBubbleSort: () => BubbleSort = () => {
  const swap = (arr: number[], index1: number, index2: number) => {
    return [];
  };

  const bubbleSort = (arr: number[]) => {
    return [];
  };

  return {
    swap,
    bubbleSort,
  };
};

export const useMergeSort: () => MergeSort = () => {
  const mergeValues = (arr1: number[], arr2: number[]) => {
    const sortedArray: number[] = [];

    const copiedArray1 = arr1.slice();
    const copiedArray2 = arr2.slice();

    while (copiedArray1.length > 0 && copiedArray2.length > 0) {
      if (copiedArray1[0] <= copiedArray2[0]) {
        const smallerValue = copiedArray1.shift();
        smallerValue && sortedArray.push(smallerValue);
      } else {
        const smallerValue = copiedArray2.shift();
        smallerValue && sortedArray.push(smallerValue);
      }
    }

    return copiedArray1.length > 0
      ? sortedArray.concat(copiedArray1)
      : sortedArray.concat(copiedArray2);
  };

  const divideValues = (arr: number[]) => {
    const standardIndex = Math.floor(arr.length / 2);

    const leftArray = arr.slice(0, standardIndex);
    const rightArray = arr.slice(standardIndex, arr.length);

    return [leftArray, rightArray] as [number[], number[]];
  };

  const mergeSort = (arr: number[]) => {
    if (arr.length <= 1) return arr;

    let [leftArray, rightArray] = divideValues(arr);

    if (leftArray.length > 1) leftArray = mergeSort(leftArray);
    if (rightArray.length > 1) rightArray = mergeSort(rightArray);

    return mergeValues(leftArray, rightArray);
  };

  return {
    divideValues,
    mergeValues,
    mergeSort,
  };
};
