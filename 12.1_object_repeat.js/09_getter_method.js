

const car = {
  brand: "Porsche",
  model: "911",
  get fullDetails() {
    return this.brand + " " + this.model;
  },
};

console.log(car.fullDetails);
console.log(car.brand);
console.log(car.model);