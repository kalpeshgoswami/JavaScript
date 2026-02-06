
let Amount = 1000;

let HRA = 10;

let DA = 9;

let TA = 8;

// const Salary = Amount * (1 + (HRA + DA + TA) / 100);

let hraAmount = Amount * HRA / 100;

let daAmount = Amount * DA / 100;

let taAmount = Amount * TA / 100;

let Salary = Amount + hraAmount + daAmount + taAmount;

console.log("Salary is " + Salary);