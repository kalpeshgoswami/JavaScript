
function totalSum() {
  let sum = 0;

  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  console.log("Total Sum:", sum);
}

totalSum(5, 15, 25, 35, 45);
