import inputNumber from "./jsFiles/inputNumber.js";
import checkOperator from "./jsFiles/checkOperator.js";
import "../src/assets/css/style.css";
// import "../build/style.css";

let number = document.querySelectorAll(".numbers div"),
  operator = document.querySelectorAll(".operators div"),
  clear = document.getElementById("clear"),
  resultbtn = document.getElementById("result");

let num = "",
  result = "";

for (let index = 0; index < number.length; index++) {
  number[index].addEventListener("click", (e) => {
    num = inputNumber(e.target.innerHTML);
  });
}

for (let index = 0; index < operator.length; index++) {
  operator[index].addEventListener("click", (e) => {
    result = checkOperator(num, e.target.innerHTML);
    inputNumber(e.target.innerHTML);
    input.innerHTML = result + e.target.innerHTML;
  });
}

clear.addEventListener("click", (e) => {
  input.innerHTML = "";
  num = "";
  result = "";
});

resultbtn.addEventListener("click", () => {
  let placedMultipliedString = num.replace(/×/g, "*");
  let palcedDivisionString = num.replace(/÷/g, "/");

  if (placedMultipliedString.includes("*")) {
    input.innerHTML = "";
    const checkDot = eval(placedMultipliedString).toString().includes(".")
      ? true
      : false;
    checkDot
      ? (input.innerHTML += eval(placedMultipliedString).toFixed(3))
      : (input.innerHTML += eval(placedMultipliedString));
  } else if (palcedDivisionString.includes("/")) {
    input.innerHTML = "";
    const checkDot = eval(palcedDivisionString).toString().includes(".")
      ? true
      : false;
    checkDot
      ? (input.innerHTML += eval(palcedDivisionString).toFixed(3))
      : (input.innerHTML += eval(palcedDivisionString));
  } else {
    input.innerHTML = "";
    const checkDot = eval(num).toString().includes(".") ? true : false;
    checkDot
      ? (input.innerHTML += eval(num).toFixed(3))
      : (input.innerHTML += eval(num));
  }
});
