const R = require("ramda");

const filterYoundAdults = R.propSatisfies(
  (age) => age >= 18 && age <= 25,
  "age"
);

const keepYoungAdults = R.filter(filterYoundAdults);

console.log(
  keepYoungAdults([
    { name: "Ichigo", age: 15 },
    { name: "Baki", age: 18 },
    { name: "Raj", age: 23 },
    { name: "Goku", age: 150 },
  ])
);
