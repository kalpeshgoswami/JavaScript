const person = {
    name: "Rohan",
    surname: "patel",
    city: "surat",
    age: "24"
};

console.log(person);

console.log(person.name);

console.log(person["surname"]);

const { name, surname } = person;

console.log(name);
console.log(surname);