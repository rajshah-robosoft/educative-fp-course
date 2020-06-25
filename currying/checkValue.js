const R = require("ramda");

defaultTo = R.curry((defaultVal, val) => (val ? val : defaultVal));

const value = defaultTo("Goku");
console.log(value(null));
console.log(value("Raj"));
