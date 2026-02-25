const product = {
    title: "Laptop",
    brand: "HP",
    price: 75000,
    category: "Electronics",
};

console.log(product);

// accessing

// accessing values using dot notation
console.log(product.title);

// accessing values using bracket notation
console.log(product["price"]);

// destructuring

const { title, brand } = product;

console.log(title);
console.log(brand);