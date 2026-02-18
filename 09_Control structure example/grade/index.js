
// document.getElementById("cars").addEventListener("submit", (event) => {
//     let cars = document.getElementById("cars").value;

//     let result = document.getElementById("result");

//     console.log("cars", cars);

//     if (cars >= 10) {
//         result.innerText = "A";
//     } else if (cars >= 8) {
//         result.innerText = "B";
//     }       else if (cars >= 6) {
//         result.innerText = "C";
//     }else{
//         result.innerText = "F";
//     }

// });

document.getElementById("carForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let cars = Number(document.getElementById("cars").value);
    let result = document.getElementById("result");

    console.log("cars:", cars);

    if (cars >= 10) {
        result.innerText = "AUDI";
    } else if (cars >= 8) {
        result.innerText = "BMW";
    } else if (cars >= 6) {
        result.innerText = "FORD";
    } else {
        result.innerText = "TOYOTA";
    }
});
