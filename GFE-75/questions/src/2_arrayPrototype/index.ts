/**
 * @template T, U
 * @param {(previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U} callbackFn
 * @param {U} [initialValue]
 * @return {U}
 */
Array.prototype.myReduce = function <T, U>(
  callbackFn: (accumulator: U, currentValue: T, index: number, array: T[]) => U,
  initialValue?: U,
): U {}
