// Variables

let number1;
let number2;
let operator;
let opMultiply = document.querySelector("#multiply");
let classOpButton = document.querySelector(".opButton");
let opDivide = document.querySelector("#divide");
let opAdd = document.querySelector("#add");
let opSubtract = document.querySelector("#subtract");
let opEqual = document.querySelector("#equal");
let numbC = document.querySelector("#AC");
let numbdecimal = document.querySelector("#decimal");
const CONTNUMBER = document.querySelector(".numbers");
const CONTOPERATOR = document.querySelector(".operators");
const CALCDISPLAY = document.querySelector("#display");
let OPCLICK = false;
let opDone = false;
const DISPNUM = [];

// EVENT LISTENERS

numbC.addEventListener("click", e => {
  clear();
  e.stopPropagation();
});

// NUMBER BUTTON EVENT LISTENER

CONTNUMBER.addEventListener("click", event => {
  const isButton = event.target.nodeName === "BUTTON";
  if (!isButton) {
    return;
  }
  if (CALCDISPLAY.textContent !== "0" && opDone) {
    DISPNUM.splice(0);
    CALCDISPLAY.textContent = "";
  }
  DISPNUM.push(event.target.textContent);
  CALCDISPLAY.textContent = DISPNUM.join("");

  if (OPCLICK) {
    number2 = DISPNUM.join("");
  } else {
    number1 = DISPNUM.join("");
  }
  OPCLICK = false;
  opDone = false;
});

// OPERATOR EVENT listener

CONTOPERATOR.addEventListener("click", event => {
  const isButton = event.target.nodeName === "BUTTON";
  if (!isButton) {
    return;
  } else if (OPCLICK === false && opDone) {
    classOpButton.style.backgroundColor = "#596fee";
  }
  let button = event.target;
  button.style.backgroundColor = "#ec5353";
  operator = event.target.textContent;
  OPCLICK = true;
  DISPNUM.splice(0);
});

// EQUAL button event listener

opEqual.addEventListener("click", e => {
  calculate(number1, number2);
  e.stopPropagation();
});

// Functions

let add = (x, y) => x + y;
let subtract = (x, y) => x - y;
let multiply = (x, y) => x * y;
let divide = (x, y) => x / y;
let clear = () => {
  CALCDISPLAY.textContent = "0";
  OPCLICK = false;
  DISPNUM.splice(0);
  number1 = undefined;
  number2 = undefined;
};

const calculate = (x, y) => {
  if (number1 === undefined || number2 === undefined) {
    return;
  }
  let answer;
  switch (operator) {
    case "+":
      answer = add(+x, +y);
      break;
    case "-":
      answer = subtract(+x, +y);
      break;
    case "*":
      answer = multiply(+x, +y);
      break;
    case "/":
      if (y === "0") {
        answer = "Undefined";
      } else answer = divide(+x, +y);
      break;
  }

  CALCDISPLAY.textContent = answer;
  opDone = true;
  OPCLICK = false;
  classOpButton.style.backgroundColor = "#596fee";
  console.log(answer, number1, number2);
  console.log(typeof number1);
};
