let num = parseInt(
  prompt("Please enter the number you would like to fizzbuzz till?")
);
for (let x = 1; x <= num; x++) {
  if (x % 3 === 0 && x % 5 === 0) {
    console.log("Fizz BUZZ");
  } else if (x % 5 === 0) {
    console.log("BUZZZ");
  } else if (x % 3 === 0) {
    console.log("FIZZ");
  } else console.log(x);
}
