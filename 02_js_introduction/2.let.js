let message = "frontend developer";

function blockScope() {
    let message = "backend developer"

    if (true) {
        let message = "full stack";

        console.log(message);
    }
    console.log(message)
}

blockScope();

// ------ variable declaration -----

let kg;

// ------ variable initialization -----

kg = 45;

console.log(kg);

// ------ Redeclaration ------

kg = 8080;
console.log(kg);

// ---- same scope you can't declare ----

// let kg