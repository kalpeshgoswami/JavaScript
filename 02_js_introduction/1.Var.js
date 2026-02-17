
// functional scope explanation

var message = "Hello, Developer!";

function greet() {

    var msg = "hello";

    console.log(msg); // accessible here

    function anotherFunction() {
        var msg = "good after noon"
        console.log(msg);
    }
    anotherFunction();

}

greet();

console.log(message);



//  ------ Reinitialization -----

var msg = "First Message";
console.log(msg);

msg = "Second Message";
console.log(msg);

// Re-declare in same scope is possible

var msg = "Third Message";
console.log("msg", msg);