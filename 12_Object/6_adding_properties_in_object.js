const person = {
    name: "arjun",
    surname: "patel",
    city: "ahmedabad",
    age: "28"
};

person.designation = "Frontend Developer";

console.log(person);

person["bloodGroup"] = "B+";

console.log(person);

function Car(brand, model, price) {
    this.brand = brand,
    this.model = model,
    this.price = price
}

Car.prototype.warranty = "2 years";

const Car1 = new Car("Toyota", "Corolla", 2000000);

console.log("Car 1 warranty :", Car1.warranty);