export type ClassValue =
  | ClassArray
  | ClassDictionary
  | string
  | number
  | null
  | boolean
  | undefined
export type ClassDictionary = Record<string, any>
export type ClassArray = Array<ClassValue>

export default function classNames(...args: Array<ClassValue>): string {
  let classes = ''

  if (!args.length) {
    return ''
  }

  for (const arg of args) {
    if (!arg) continue

    if (typeof arg === 'string' || typeof arg === 'number') {
      classes += `${arg} `
      continue
    }

    if (Array.isArray(arg)) {
      classes += classNames(...arg)
      continue
    }

    if (typeof arg === 'object') {
      Object.keys(arg).forEach((key) => {
        if (arg[key]) {
          classes += `${key} `
        }
      })
    }
  }

  return classes.trim()
}

classNames('foo')
