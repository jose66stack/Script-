const cars = ["BMW", "Mercedes", "Toyota"];
cars[0] = "Honda";
cars.push("Mitsubishi");

document.getElementById("demo1").innerHTML = cars;

var year = 2; // global variable
let car = 20; // block variable
let total = year * car;

document.getElementById("demo").innerHTML = total;

var name = "Im here"; // string variable

console.log(name);
