export {}

type TValidType = undefined | null

// declare global {
//   interface Array {
//     myReduce(
//       callbackFn: (
//         accumulator: any,
//         currentValue: any,
//         index: number,
//         array: any[],
//       ) => any,
//       initialValue?: any,
//     ): any
//   }
// }

declare global {
  interface Array<T> {
    myReduce<U>(
      callbackFn: (
        accumulator: U,
        currentValue: T,
        index: number,
        array: T[],
      ) => U,
      initialValue?: U,
    ): U
  }
}
