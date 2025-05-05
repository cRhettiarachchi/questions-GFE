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
      if (i in data) {
        accumulator = callbackFn(accumulator, data[i], i, data)
      }
    }
    return accumulator
  } else {
    if (!data.length) {
      throw new Error()
    }

    let idx = 0

    while (idx < data.length && !(idx in data)) {
      idx++
    }

    if (idx >= data.length) throw new Error()

    let accumulator: any = data[idx]

    for (let i = idx + 1; i <= data.length - 1; i++) {
      if (i in data) {
        accumulator = callbackFn(accumulator, data[i], i, data)
      }
    }

    return accumulator
  }
}
