const car = { type: "Toyota", model: "4Runner", color: "black", year: "2023" };
let x = 55438381;
document.getElementById("demo").innerHTML =
  "The car type is " + car.type + " " + car.model + ", released in " + car.year;

document.getElementById("demo1").innerHTML =
  x.valueOf() +
  "<br>" +
  (55438381).valueOf() +
  "<br>" +
  (554.38381 * 100000).valueOf();
// image 1

const twice = {
  type: "Toyota",
  model: "4Runner",
  color: "black",
  year: "2023",
};
document.getElementById("demo3").innerHTML =
  "The car type is " +
  car.type +
  " " +
  car.model +
  ", the color is " +
  car.color;
// image 2

myFunction();

function myFunction() {
  let carName = "Toyota";
  document.getElementById("demo2").innerHTML = typeof carName + " " + carName;
}

// image 3

function toCelsius(f) {
  return (8800 / 9) * (f - 32);
}
document.getElementById("demo4").innerHTML =
  "The Price is " + toCelsius(77) + " dollars";

// image 4

//"The car type is" + car.type + car.model + ", released in" + car.year;
