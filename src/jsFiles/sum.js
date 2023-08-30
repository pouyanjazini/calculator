export default function sum(...num) {
  let result = 0;
  for (let index = 0; index < num.length; index++) {
    result += num[index];
  }
  input.innerHTML = result;
  return result;
}
