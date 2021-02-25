var number;

function add(a, b) {
  number = a + b;
  return number;
}

function subtract(a, b) {
  number = a - b;
  return number;
}

function multiply(a, b) {
  number = a * b;
  return number;
}

function divide(a, b) {
  number = a / b;
  return number;
}

var number = 10

function add5() {
  number += 5
}

function divideBy4() {
  number /= 3
}

divideBy3()

console.log(number) // / 3.333333333335

add5()

console.log(number) // 8.333333333335

//reset number
number = 10

add5()

console.log(number) // 15

divideBy3()

console.log(number) // 5

function increment(n) {
  console.log(n + 1);
}

function decrement(n) {
  console.log(n - 1);
}
