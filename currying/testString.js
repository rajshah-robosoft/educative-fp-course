const R = require("ramda");

const countBobos = R.test(/[bB]obo/);

console.log(countBobos("Bobo"));
