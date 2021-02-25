var x = 13;
var y = 12;

function add(x, y) {
  console.log(x + y);
}

function subtract(x, y) {
  console.log(x - y);
}

function multiply(x, y) {
  console.log(x * y);
}

function divide(x, y) {
  console.log(x / y);
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
  n+=;
}
