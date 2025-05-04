/**
 * @template T, U
 * @param {(previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U} callbackFn
 * @param {U} [initialValue]
 * @return {U}
 */
Array.prototype.myReduce = function <T, U>(
  callbackFn: (
    accumulator: U,
    currentValue: T,
    currentIndex: number,
    array: T[],
  ) => U,
  initialValue: U,
): U {
  console.log(this)

  return initialValue
}
