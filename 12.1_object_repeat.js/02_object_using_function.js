function Mobile(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
}

const mobile1 = new Mobile("Apple", "iPhone 15", 999);

console.log(typeof mobile1);

console.log("Mobile 1 detail", mobile1);

const mobile2 = new Mobile("Samsung", "Galaxy S24", 899);

console.log("Mobile 2 detail", mobile2);