import hasOperator from "./hasOperator.js";

let input = document.getElementById("input");
let tempString = "";
let clear = document.getElementById("clear");
const checkDotRegex = /\./g;

export default function inputNumber(number) {
  // console.log("inputnumber", number);
  if (input.innerText === "0") {
    tempString = "";
    input.innerText = "";
  }

  if (hasOperator(number)) {
    tempString = "";
    return false;
  }

  tempString += number;
  function checkStringForMoreThanTwoDots(number) {
    return number === "."
      ? (tempString.match(checkDotRegex) || []).length > 1
      : false;
  }

  clear.addEventListener("click", (e) => {
    tempString = "";
    input.innerText = "";
  });

  if (checkStringForMoreThanTwoDots(number)) {
    console.log("we have more than two dots", number);
    tempString = input.innerText;
    return tempString;
  } else {
    return (input.innerHTML += number);
  }
}
