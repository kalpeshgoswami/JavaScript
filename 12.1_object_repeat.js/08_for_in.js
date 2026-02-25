const car = {
    brand: "Porsche",
    model: "911",
    year: 2023,
    color: "Red",
};

for (let key in car) {
    console.log(key + " : " + car[key]);
}