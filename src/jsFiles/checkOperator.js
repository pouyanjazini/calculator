import sum from "./sum.js";
import sub from "./subtraction.js";
import mul from "./multiply.js";
import divide from "./division.js";
import hasOperator from "./hasOperator.js";

const checkNumberWithDot = /^-?\d+(\.\d+)?[+\-×÷]-?\d+(\.\d+)?$/,
  matchRegex = /-?\d+(\.\d+)?|[+\-×÷]/g;

let input = document.getElementById("input");
let clear = document.getElementById("clear");

export default function checkOperator(num, operator) {
  // console.log("checkOperator oprator", operator);
  // console.log("checkOperator num", num);
  // console.log("checkOperator num", typeof num);

  clear.addEventListener("click", (e) => {
    input.innerText = "";
  });

  if (checkNumberWithDot.test(num)) {
    let placedMultipliedString = num.replace(/×/g, "*");
    let palcedDivisionString = num.replace(/÷/g, "/");

    if (placedMultipliedString.includes("*")) {
      input.innerHTML = "";
      return eval(placedMultipliedString);
    } else if (palcedDivisionString.includes("/")) {
      input.innerHTML = "";
      return eval(palcedDivisionString);
    } else {
      input.innerHTML = "";
      return eval(num);
    }
  }

  //|| num === "undefined"
  if (num === "") {
    // console.log("check shodane num khali ");
    num = "";
    input.innerHTML = "";
    return "";
  }

  switch (operator) {
    case "+":
      return checkPositive(num);
    case "-":
      return checkMinus(num);
    case "×":
      return checkMul(num);
    case "÷":
      return checkDivide(num);
  }
}

function checkMinus(input) {
  let output = 0;
  if (input.includes("-")) {
    const numbers = input.split("-").map(Number);
    output = sub(parseFloat(numbers[0]), parseFloat(numbers[1]));
    return output;
  } else if (hasOperator(input)) {
    const sign = input.match(/[+\-×÷]/)[0];
    return checkOtherOperator(sign, input);
  }
  return input;
}

function checkPositive(input) {
  let output = 0;
  if (input.includes("+")) {
    const numbers = input.split("+").map(Number);
    output = sum(parseFloat(numbers[0]), parseFloat(numbers[1]));
    return output;
  } else if (hasOperator(input)) {
    const sign = input.match(/[+\-×÷]/)[0];
    return checkOtherOperator(sign, input);
  }
  return input;
}

function checkMul(input) {
  let output = 0;
  if (input.includes("×")) {
    const numbers = input.split("×").map(Number);
    output = mul(parseFloat(numbers[0]), parseFloat(numbers[1]));
    return output;
  } else if (hasOperator(input)) {
    const sign = input.match(/[+\-×÷]/)[0];
    return checkOtherOperator(sign, input);
  }
  return input;
}

function checkDivide(input) {
  let output = 0;
  if (input.includes("÷")) {
    const numbers = input.split("÷").map(Number);
    output = divide(parseFloat(numbers[0]), parseFloat(numbers[1]));
    return output;
  } else if (hasOperator(input)) {
    const sign = input.match(/[+\-×÷]/)[0];
    return checkOtherOperator(sign, input);
  }
  return input;
}

function checkOtherOperator(operator, input) {
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
