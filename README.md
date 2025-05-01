# GreatFrontEnd Local Environment

Local environment for solving GreatFrontEnd coding challenges with Jest tests.

## Folder Structure

- `src/`: Implementation files
- `tests/`: Test files
- `questions/`: Question descriptions

## Usage

1. Create a new folder for each challenge in the `src` folder
2. Copy the corresponding test to the `tests` folder
3. Run tests with:
   - `npm test` - run all tests
   - `npm run test:watch` - run tests in watch mode
   - `npm run test:single "test name"` - run a specific test

Example:
```
src/
  debounce/
    index.ts
tests/
  debounce/
    index.test.ts
questions/
  debounce.md
```
