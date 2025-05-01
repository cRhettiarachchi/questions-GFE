# Debounce Function Implementation

Debouncing is a technique used to control how many times we allow a function to
be executed over time. When a JavaScript function is debounced with a wait time
of `X` milliseconds, it must wait until after `X` milliseconds have elapsed
**since the last time** the debounced function was called.

You almost certainly have encountered debouncing in your daily life before (e.g.
when entering an elevator). Only after `X` duration of **not** pressing the
"Door open" button (the debounced function not being called) will the elevator
door actually close (the callback function is executed).

## Task

Implement a `debounce` function which accepts a callback function and a wait
duration. Calling `debounce()` returns a function which has debounced
invocations of the callback function following the behavior described above.

---

## Examples

### Example 1

```javascript
let i = 0;
function increment() {
  i++;
}
const debouncedIncrement = debounce(increment, 100);

// t = 0: Call debouncedIncrement().
debouncedIncrement(); // i = 0

// t = 50: i is still 0 because 100ms have not passed.

// t = 100: increment() was invoked and i is now 1.
```

### Example 2

```javascript
let i = 0;
function increment() {
  i++;
}
const debouncedIncrement = debounce(increment, 100);

// t = 0: Call debouncedIncrement().
debouncedIncrement(); // i = 0

// t = 50: i is still 0 because 100ms have not passed.

// Call debouncedIncrement() again.
debouncedIncrement(); // i = 0

// t = 100: i is still 0 because it has only been 50ms since the last call at t = 50.

// t = 150: 100ms have passed since the last call (at t = 50),
// so increment() is invoked and i is now 1.
```

---

## Follow-Up

- Add a `cancel()` method to cancel delayed invocations.
- Add a `flush()` method to immediately invoke any pending execution.
- Implement `throttle`, which is similar to debounce but behaves slightly
  differently.

---

## Reading

- [Debounce - Lodash Documentation](https://lodash.com/docs/#debounce)
