//  ----- Deep copy  in permeative data types -----   

let k = 20;
let g = k;

console.log(g);

g = 40;

console.log(g);
console.log(k);

// ------ shallow copy in non permeative data types -----

let student = { name: "kalpesh", age: 20, course: "web-dev" };

let student2 = student;

console.log("student1", student);
console.log("student2", student2);

student2.name = "goswami";

console.log("student2", student2);
console.log("student", student);