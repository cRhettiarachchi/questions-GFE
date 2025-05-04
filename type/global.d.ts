export {}

declare global {
  interface Array<T> {
    myReduce<U>(
      callbackFn: (
        accumulator: U,
        currentValue: T,
        currentIndex: number,
        array: T[],
      ) => U,
      initialValue?: U,
    ): U
  }
}
