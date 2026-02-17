//  ----- 1 arithmetic operator -----

let a = 8;
let b = 3;

console.log("addition", a + b);
console.log("subtraction", a - b);
console.log("multiplication", a * b);
console.log("division", a / b);
console.log("modulo", a % b);
console.log("exponential", a ** b);


//  ----- 2 assignment operator -----

let x = 20;

x += 10;
console.log("add and assign", x);

x -= 4;
console.log("subtract and assign", x);

x *= 2;
console.log("multiplication and assign", x);

x /= 5;
console.log("division and assign", x);


//  ----- 3 comparison operator -----

let value1 = 15;
let value2 = "15";

console.log("result", value1 == value2);
console.log("strict equality operator", value1 === value2);

console.log("not equal", value1 != value2);
console.log("strict not equal", value1 !== value2);

console.log("less than", value1 < 20);
console.log("greater than", value1 > 10);


//  ----- 4 logical operator -----

let Student = true;
let ID = true;

// and
if (Student && ID) {
    console.log("both condition is true");
}

// or
if (Student || ID) {
    console.log("At least one condition is true");
}

// not
console.log("opposite value", !Student);


// ----- unary operator -----

let count = 10;

console.log(count);

count++;
console.log("after post increment", count);

++count;
console.log("after pre increment", count);


// ----- ternary operator -----

let marks = 45;

marks >= 50 ? console.log("You Passed") : console.log("You Failed");

console.log("type of marks", typeof marks);
