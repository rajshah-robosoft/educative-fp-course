const R = require("ramda");

let getAges = R.pluck("age");

console.log(
  getAges([
    { name: "Raj", age: 23 },
    { name: "Goku", age: 150 },
  ])
);
