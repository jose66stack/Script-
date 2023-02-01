var year = 2; // global variable
{
  var car = 20;
  // block variable
}
let total = year * car;

document.getElementById("demo").innerHTML = total;

("use strict");
const x = Object.freeze({
  name: "test",
  age: 60,
  obj: {
    a: 1,
  },
});
var health = "life"; // string variable
console.log(health);
console.log(x);
x.obj.a = 5;
