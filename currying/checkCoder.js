const R = require("ramda");

const checkCoder = R.where({
  lovesTech: R.equals(true),
  worksHard: R.equals(true),
});

const shouldCode = R.ifElse(
  checkCoder,
  (data) => `${data.name} may enjoy a tech career!`,
  (data) => `${data.name} wouldn't enjoy a tech career.`
);

console.log(shouldCode({ name: "Raj", lovesTech: true, worksHard: true }));

console.log(shouldCode({ name: "Goku", lovesTech: false, worksHard: true }));
