
# Custom Implementation of `Array.prototype.reduce`

This question might seem easy at first glance, but the **nuances** make it trickier than it appears on the surface. Understanding these subtleties is what separates senior candidates and earns bonus points.

## Key Nuances

- The reducer callback is passed the `currentIndex` and `array` as the **third** and **fourth** arguments respectively.
- If there is **no initial value** supplied to the `reduce` function:
  - The **first element** of the array (index 0) is used as the initial accumulator.
  - Iteration starts from index **1**, not 0.

## ✅ Solution

The rest of the implementation is straightforward when keeping these nuances in mind. As we loop through the array (`this`), we:

1. Call the callback on each array element.
2. Pass the following parameters to the callback: `acc`, `element`, `index`, and `this`.
3. Use the returned value as the new `acc` (accumulator) for the next iteration.

---

### JavaScript / TypeScript Implementation

```ts
/**
 * @template T, U
 * @param {(previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U} callbackFn
 * @param {U} [initialValue]
 * @return {Array<U>}
 */
Array.prototype.myReduce = function (callbackFn, initialValue) {
  const noInitialValue = initialValue === undefined;
  const len = this.length;

  if (noInitialValue && len === 0) {
    throw new TypeError('Reduce of empty array with no initial value');
  }

  let acc = noInitialValue ? this[0] : initialValue;
  let startingIndex = noInitialValue ? 1 : 0;

  for (let k = startingIndex; k < len; k++) {
    if (Object.hasOwn(this, k)) {
      acc = callbackFn(acc, this[k], k, this);
    }
  }

  return acc;
};
```

---

## 🧪 Edge Cases

- Empty array with and without the `initialValue`.
- Single-value array, with and without `initialValue`.
- Callback receives correct `index` and `array`.
- Sparse arrays like `[1, 2, , 4]`. Empty values should be **skipped**.

---

## 📌 Notes

- **Avoid mutating** the array inside the reduce callback. It can lead to unintended consequences.
- However, it’s valid (according to TC39 spec) and worth noting:

  - The range of elements is **fixed** before the first callback.
  - Appending elements after reduction starts won't affect it.
  - Changes to existing elements **are picked up** if they haven’t been visited yet.
  - Deleted elements before being visited are **not** visited.

---

## 🧠 One-liner Hack

You can cheat the autograder with:

```js
Array.prototype.myReduce = Array.prototype.reduce;
```

---

## 📜 Spec-Based Solution

Here’s a spec-following implementation:

```js
Array.prototype.myReduce = function (callbackFn, initialValue) {
  const len = this.length;

  if (
    typeof callbackFn !== 'function' ||
    !callbackFn.call ||
    !callbackFn.apply
  ) {
    throw new TypeError(`${callbackFn} is not a function`);
  }

  // (rest of the logic continues as needed)
};
```
