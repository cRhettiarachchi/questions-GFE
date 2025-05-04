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
  const data = this

  if (!Array.isArray(data)) throw new Error('Invalid array')

  return initialValue
}
