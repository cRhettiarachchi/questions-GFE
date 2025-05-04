/**
 * @template T, U
 * @param {(previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U} callbackFn
 * @param {U} [initialValue]
 * @return {U}
 */
Array.prototype.myReduce = function <T, U>(
  callbackFn: (accumulator: U, currentValue: T, index: number, array: T[]) => U,
  initialValue?: U,
): U {
  const data = this as T[]

  if (!Array.isArray(data)) throw new Error('Invalid array')

  if (arguments.length >= 2) {
    let accumulator: any = initialValue
    for (let i = 0; i <= data.length - 1; i++) {
      accumulator = callbackFn(accumulator, data[i], i, data)
    }
    return accumulator
  }

  return initialValue!
}
