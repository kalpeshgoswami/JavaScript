const course = {
    title: "JavaScript Basics",
    duration: "3 Months",
    level: "Beginner",
    fee: 12000,
};

// using dot notation
course.instructor = "kalpesh";

console.log(course);

// using bracket notation
course["mode"] = "Online";

console.log(course);




function Restaurant(name, tables, chefs) {
    this.name = name;
    this.tables = tables;
    this.chefs = chefs;
}

Restaurant.prototype.homeDelivery = true;

const restaurant1 = new Restaurant("Spice Villa", 20, 5);

console.log("Restaurant 1 detail", restaurant1.homeDelivery);