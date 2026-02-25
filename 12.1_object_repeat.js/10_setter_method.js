const car = {
  brand: "Porsche",
  speed: "",
  set carSpeed(speed) {
    if (speed > 300) {
      return console.log("Speed too high! Drive safely");
    }

    this.speed = speed;
  },
};

car.carSpeed = 250;

console.log(car);

console.log("Car speed", car.speed);