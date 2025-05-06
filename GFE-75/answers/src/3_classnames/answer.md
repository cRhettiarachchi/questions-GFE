### Clarification questions

The following are good questions to ask the interviewer to demonstrate your
thoughtfulness. Depending on their response, you might need to adjust the
implementation accordingly.

**Can there be duplicated classes in the input? Should the output contain
duplicated classes?**

Yes, there can be. In this case the output will contain duplicated classes.
However, we will not test for this case.

**What if a class was added and then later turned off?**  
E.g. `classNames('foo', { foo: false })`?

In the library implementations, the final result will be `'foo'`. However, we
will not test for this case.

---

### Solution

The tricky part of this solution is the recursive nature of the function. Hence
we can separate out the solution into two parts:

1. Handling of each data type
2. Recursing for array type

We will need a data structure, `classes`, to collect all the classes for the
lifetime of the function that the recursive calls have access to. In our
solution we use an `Array` for the collection, but you can also use a `Set`.

To recursively process each argument and collect the classes, a few approaches
come to mind:

- **Pure recursive function**: Recursive calls do not depend on external values
  nor modify the arguments.
- **Inner recursive helper that modifies an external value**: The collection is
  defined at the top level of the function. Inner recursive functions modify the
  external top-level collection by adding to that collection.
- **Inner recursive helper that modifies the argument**: The collection is
  defined at the top level of the function, passed as an argument into recursive
  calls, and recursive calls add to the argument.

#### Here's how we will handle each data type:

- **Falsey values**: Ignore
- **String**: Add it to the classes collection
- **Number**: Add it to the classes collection
- **Array**: Recursively invoke the classNames function or inner recursive
  function
- **Object**: Loop through the key/value pairs and add the keys with truthy
  values into the classes collection

---

### Approach 1: Pure recursive function

In this approach, the `classNames` function calls itself and its return value is
a string that can be composed by parent recursive calls.

#### JavaScript / TypeScript

```ts
/**
 * @param {...(any|Object|Array<any|Object|Array>)} args
 * @return {string}
 */
export default function classNames(...args) {
  const classes = []

  args.forEach((arg) => {
    // Ignore falsey values.
    if (!arg) {
      return
    }

    const argType = typeof arg

    // Handle string and numbers.
    if (argType === 'string' || argType === 'number') {
      classes.push(arg)
      return
    }

    // Handle arrays.
    if (Array.isArray(arg)) {
      classes.push(classNames(...arg))
      return
    }

    // Handle objects.
    if (argType === 'object') {
      for (const key in arg) {
        // Only process non-inherited keys.
        if (Object.hasOwn(arg, key) && arg[key]) {
          classes.push(key)
        }
      }

      return
    }
  })

  return classes.join(' ')
}
```

### Approach 2: Inner recursive helper function (modifies external value)

This method involves defining an internal helper that modifies an external array
to collect classes. This is more efficient because it avoids repeated .join()
calls and is easier to debug.

```TS
export default function classNames(...args) {
  const classes = [];

  function process(arg) {
    if (!arg) return;

    const argType = typeof arg;

    if (argType === 'string' || argType === 'number') {
      classes.push(arg);
    } else if (Array.isArray(arg)) {
      arg.forEach(process);
    } else if (argType === 'object') {
      for (const key in arg) {
        if (Object.hasOwn(arg, key) && arg[key]) {
          classes.push(key);
        }
      }
    }
  }

  args.forEach(process);
  return classes.join(' ');
}
```
