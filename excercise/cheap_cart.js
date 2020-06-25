const { head, sortBy, pipe, prop } = require("ramda");
const cart = [
  {
    name: "apple",
    price: 230,
  },
  {
    name: "lettuce",
    price: 345,
  },
  {
    name: "tomato",
    price: 13,
  },
  {
    name: "lemon",
    price: 100,
  },
  {
    name: "kiwi",
    price: 85,
  },
  {
    name: "broccoli",
    price: 130,
  },
  {
    name: "mango",
    price: 234983428,
  },
  {
    name: "pear",
    price: 105,
  },
  {
    name: "carrot",
    price: 10,
  },
];

const getCheapestItem = pipe(sortBy(prop("price")), head, prop("name"));

console.log(getCheapestItem(cart));
