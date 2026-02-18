// Recursion is a process where a function calls itself

function sumOfNumbers(n) {
  console.log("n:", n);

  if (n <= 0) {
    return 0;
  } 
  else {
    return n + sumOfNumbers(n - 1);
  }
}

let total = sumOfNumbers(5);

console.log("Total Sum:", total);
