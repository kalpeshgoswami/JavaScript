function blockScope() {

    const message = "software developer";

    if (true) {
        const message = "web developer";
        console.log(message);
    }
    console.log(message);
}
blockScope();

// ------ variable declaration ------ 

const k = 100; 

console.log(k);
