# Debounce: Classic Frontend Interview Question

Debounce, along with throttle, are among the most common front end interview
questions — it's the front-end equivalent of inverting a binary tree. Hence, you
should make sure that you are very familiar with this question.

---

## 🧠 Solution Overview

Given that there's a wait duration before the function can be invoked, we know
that we will need a **timer**, and `setTimeout` is the first thing that comes to
mind.

We will also need to return a function that wraps around the callback function
parameter. This function needs to handle:

---

### 1. Debounce Invocation

- The function invokes the **callback only after a delay of `wait`
  milliseconds** using `setTimeout`.
- If the debounced function is called again while there's a pending invocation:
  - Cancel the existing timer with `clearTimeout(timeoutID)`
  - Schedule a new timer with the full wait duration
- We retain a reference to the timeout using `timeoutID`

---

### 2. Call the Callback with Correct Parameters

Debounced functions should behave like the original functions, so:

- Forward the value of `this`
- Forward all arguments

You may be tempted to use `func(...args)`, but this can lose the value of
`this`.  
Use `Function.prototype.apply()` or `Function.prototype.call()` instead:

```js
func.apply(thisArg, args)
func.call(thisArg, ...args)
```

---

## 💻 JavaScript / TypeScript Implementation

```ts
/**
 * @param {Function} func
 * @param {number} wait
 * @return {Function}
 */
export default function debounce(func, wait = 0) {
  let timeoutID = null
  return function (...args) {
    // Keep a reference to `this` so that
    // func.apply() can access it.
    const context = this
    clearTimeout(timeoutID)

    timeoutID = setTimeout(function () {
      timeoutID = null // Not strictly necessary but good to do this.
      func.apply(context, args)
    }, wait)
  }
}
```

---

## ⚠️ Edge Cases & Gotchas

The main pitfall is **invoking the callback with the correct `this`** — i.e.,
the value of `this` when the debounced function was called.  
Because the function is invoked later (in `setTimeout`), we must **preserve
`this`** manually.

### Two Approaches:

#### ✅ 1. Save `this` in a Variable

Use a `const context = this;` before the timeout — traditional approach.

#### ✅ 2. Use an Arrow Function

Arrow functions preserve the lexical `this` — cleaner and more modern.

---

## ✅ Clean Final Example (Arrow Function Style)

```ts
/**
 * @param {Function} func
 * @param {number} wait
 * @return {Function}
 */
export default function debounce(func, wait = 0) {
  let timeoutID = null
  return function (...args) {
    clearTimeout(timeoutID)
    timeoutID = setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}
```
