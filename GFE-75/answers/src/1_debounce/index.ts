export default function debounce(func: Function, wait: number): Function {
  let timeoutId: ReturnType<typeof setTimeout> | null = null

  const debounceExecution = function (this: any, ...args: any[]) {
    const context = this

    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
      func.apply(context, args)
    }, wait)
  }

  return debounceExecution
}
