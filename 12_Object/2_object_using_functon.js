function Car(brand, model, price) {
    this.brand = brand,
    this.model = model,
    this.price = price
}

const Car1 = new Car("Toyota", "Fortuner", 3500000);

console.log("Car 1 detail :", Car1);

const Car2 = new Car("BMW", "X5", 9000000);

console.log("Car 2 detail :", Car2);