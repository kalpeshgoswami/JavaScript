const car = {
  brand: "Porsche",
  model: "911",
  year: 2023,
  color: "Red",
};

// deleting a property
delete car.color;

console.log("car", car);

// hasOwnProperty

console.log(car.hasOwnProperty("brand")); 
console.log(car.hasOwnProperty("color"));  

// Object.keys

console.log(Object.keys(car));