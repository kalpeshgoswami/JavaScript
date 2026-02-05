
// functional scope explanation

var message = "Hello, Developer!";

function greet() {

    var msg = "hello";

    console.log(msg); // accessible here

    function anotherFunction() {
     var msg ="good after noon"
        console.log(msg);
    }
    anotherFunction();

}