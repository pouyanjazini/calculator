export default function hasOperator(input) {
  const hasOperator =
    input.includes("-") ||
    input.includes("×") ||
    input.includes("+") ||
    input.includes("÷");

  return hasOperator ? true : false;
}
