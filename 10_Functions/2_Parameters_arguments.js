// function declaration

// parameter
function multiplication(x, y) {
  console.log(x * y);
}

// passing arguments
multiplication(5, 2);
multiplication(6, 3);

function subtraction(a = 10, b = 5) {
  console.log(a - b);
}

// without arguments

subtraction();

// with arguments and default parameter

subtraction(20, 10);