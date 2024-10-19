// Only + is clearing not the others

// Variables

let number1;
let number2;
let operator;
let opMultiply = document.querySelector("#multiply");
let classOpButton = document.querySelectorAll(".opButton");
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
  // classOpButton.style.backgroundColor = "#596fee";
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
    number2 = parseFloat(DISPNUM.join(""));
  } else {
    number1 = parseFloat(DISPNUM.join(""));
  }
  opDone = false;
  // OPCLICK = false;
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

// KEYBOARD EVENT LISTENER
document.addEventListener("keydown", e => {
  const keyname = e.key;
  if (CALCDISPLAY.textContent !== "0" && opDone) {
    DISPNUM.splice(0);
    CALCDISPLAY.textContent = "";
  }
  if (keyname === "Backspace") {
    DISPNUM.pop();

    CALCDISPLAY.textContent = DISPNUM.join("");
    if (OPCLICK) {
      number2 = parseFloat(DISPNUM.join(""));
    } else {
      number1 = parseFloat(DISPNUM.join(""));
    }
    return;
  }
  if (!/^\d$/.test(keyname) && keyname !== ".") {
    return;
  }
  if (keyname === "." && DISPNUM.includes(".")) {
    return;
  }
  DISPNUM.push(keyname);
  CALCDISPLAY.textContent = DISPNUM.join("");
  if (OPCLICK) {
    number2 = parseFloat(DISPNUM.join(""));
  } else {
    number1 = parseFloat(DISPNUM.join(""));
  }

  opDone = false;
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
  classOpButton.forEach(button => {
    button.style.backgroundColor = "#596fee";
  });
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
  classOpButton.forEach(button => {
    button.style.backgroundColor = "#596fee";
  });
  console.log(number1, number2, answer);
  console.log(typeof number1, typeof number2);
};

// Page load event

document.addEventListener("DOMContentLoaded", clear);
