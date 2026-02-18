let km = 25; 
let rent;

if (km <= 5) {
    rent = km * 20; 
} else if (km <= 15) {
    rent = 5 * 20 + (km - 5) * 15;
} else {
    rent = 5 * 20 + 10 * 15 + (km - 15) * 10;
}

console.log("Total taxi rent:", rent);
