export default function devision(...num) {
  let result = num[0];
  for (let index = 1; index < num.length; index++) {
    result /= num[index];
  }
  input.innerHTML = result;
  return result;
}
