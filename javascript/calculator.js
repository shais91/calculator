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
let OPCLICK = false;
const DISPNUM = [];

// Event listeners

numbC.addEventListener("click", (e) => {
  clear();
  e.stopPropagation();
});

// numbers event listner
CONTNUMBER.addEventListener("click", (event) => {
  const isButton = event.target.nodeName === "BUTTON";
  if (!isButton) {
    return;
  }
  if ((OPCLICK = true)) {
    DISPNUM.push(event.target.textContent);
    CALCDISPLAY.textContent = DISPNUM.join(" ");
    number2 = DISPNUM.join("");
    console.log(number2);
    return;
  }
  DISPNUM.push(event.target.textContent);
  CALCDISPLAY.textContent = DISPNUM.join(" ");
  OPCLICK = false;
});

// operator event listener
CONTOPERATOR.addEventListener("click", (event) => {
  const isButton = event.target.nodeName === "BUTTON";
  if (!isButton) {
    return;
  }

  operator = event.target.textContent;
  number1 = DISPNUM.join("");
  OPCLICK = true;
  DISPNUM.splice(0);
});

// equal button event listener
opEqual.addEventListener("click", (e) => {
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

let calculate = (x, y) => {
  if (number1 === undefined || number2 === undefined) {
    return;
  }
  let answer;
  switch (operator) {
    case "+":
      answer = add(+x, +y);
      break;
    case "-":
      answer = subtract(x, y);
      break;
    case "*":
      answer = multiply(x, y);
      break;
    case "/":
      answer = divide(x, y);
      break;
  }
  CALCDISPLAY.textContent = answer;
  console.log(answer, number1, number2);
  console.log(typeof number1);
};
