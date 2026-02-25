const laptop = {
  brand: "HP",
  model: "victus",
  price: 65000,
  ram: "8GB",
};

// using dot notation
laptop.price = 60000;

console.log(laptop);

// using bracket notation
laptop["ram"] = "16GB";

console.log(laptop);