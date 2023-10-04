/**
 * The `exhaustiveGuard` function is used to check exhaustiveness.
 */
export function exhaustiveGuard(_value: never): never {
  throw new Error(
    `ERROR! Reached forbidden guard function with unexpected value: ${JSON.stringify(
      _value
    )}`
  );
}
