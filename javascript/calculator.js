// Variables

let number1;
let number2;
let operator;
let opMultiply = document.querySelector("#multiply");
let opDivide = document.querySelector("#divide");
let opAdd = document.querySelector("#add");
let opSubtract = document.querySelector("#subtract");
let opEqual = document.querySelector("#equal");
let numbC = document.querySelector("#AC");
let numb1 = document.querySelector("#one");
let numb2 = document.querySelector("#two");
let numb3 = document.querySelector("#three");
let numb4 = document.querySelector("#four");
let numb5 = document.querySelector("#five");
let numb6 = document.querySelector("#six");
let numb7 = document.querySelector("#seven");
let numb8 = document.querySelector("#eight");
let numb9 = document.querySelector("#nine");
let numb0 = document.querySelector("#zero");
let numbdecimal = document.querySelector("#decimal");
const CONTNUMBER = document.querySelector(".numbers");
const CONTOPERATOR = document.querySelector(".operators");
const CALCDISPLAY = document.querySelector("#display");

numbC.addEventListener("click", () => {
  CALCDISPLAY.innerHTML = "0";
});
CONTNUMBER.addEventListener("click", (event) => {
  const isButton = event.target.nodeName === "BUTTON";
  if (!isButton) {
    return;
  }
  number1 = event.target.textContent;
  console.log(number1);
});

CONTOPERATOR.addEventListener("click", (event) => {
  const isButton = (event.target.nodeName = "BUTTON");
  if (!isButton) {
    return;
  }
  operator = event.target.textContent;
  console.log(operator);
});

// Functions

let add = (x, y) => x + y;
let subtract = (x, y) => x - y;
let multiply = (x, y) => x * y;
let divide = (x, y) => x / y;

function calculate() {
  let x = +prompt("Add the first number please");
  let z = prompt(
    "Add '+' for addition and '-' for subtraction '*' for multiplication and '/' for division"
  );
  let y = +prompt("Add the second number");

  if (isNaN(x) || isNaN(y)) {
    return "Please add number only";
  }
  let result;

  if (z === "+") {
    result = x + y;
  } else if (z === "-") {
    result = x - y;
  } else if (z === "*") {
    result = x * y;
  } else if (z === "/") {
    result = y !== 0 ? x / y : "cannot be divided by zero";
  } else {
    result = "invalid operation use + - * or / only";
  }
  document.getElementById("calculation").innerHTML =
    "Your answer is : " + result;
  console.log(result);
}
