// problem :take a number from user add it to another number and return the Sum
// pseudocode:get a prompt on site to add a number
// make another prompt to add second number
// declare variable x to first and variable y to second
// add two variables
// print result on site

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

// let add = function (one, two) {

//   return one + two;
// };
// // Addition of variables

// // subtraction of variables
// let subtract = function (one, two) {
//   if (isNaN(one) || isNaN(two)) {
//     return "Please add number only";
//     console.log("string added");
//   }
//   return one - two;
// };

// if (z === "+") {
//   let addresult = add(x, y);
//   document.write("<div class = 'addresult'>" + addresult + "</div>");
//   console.log(addresult + " addition done");
// } else if (z === "-") {
//   const subtractresult = subtract(x, y);
//   document.write("<div class='addresult'>" + subtractresult + "</div>");
//   console.log(subtractresult + " subtraction done");
// } else {
//   document.write(
//     "<div class ='addresult'>" + "Please enter '+' or '-' only" + "</div>"
//   );
//   console.log("illegal character added");
