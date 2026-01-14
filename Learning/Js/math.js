export function add(a, b) {
  return a + b;
}

export function divide(a, b) {
  if (b === 0) {
    throw new Error("Divisor must be greater than 0");
  } else {
    return a / b;
  }
}
