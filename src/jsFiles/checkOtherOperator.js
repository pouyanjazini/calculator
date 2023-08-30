export default function checkOtherOperator(operator, input) {
  switch (operator) {
    case "+":
      return checkPositive(input, operator);
    case "-":
      return checkMinus(input, operator);
    case "×":
      return checkMul(input, operator);
    case "÷":
      return checkDivide(input, operator);
  }
}
