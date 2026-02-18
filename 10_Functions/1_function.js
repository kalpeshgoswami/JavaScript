// Function declaration
function Guitar() {
  console.log("I am learning to play the guitar");
}

// Function invocation
learnGuitar();

// Using a function to calculate something
console.log(sum(15, 25));

function sum(x, y) {
  return x + y;
}

// Reusing the same function with different arguments
console.log(sum(300, 450));
console.log(sum(12, 88));

// Function expression
let Run = function () {
  console.log("I am running");
};

// Calling the function expression
Run();