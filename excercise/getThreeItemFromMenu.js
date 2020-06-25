const {
  pipe,
  prop,
  propSatisfies,
  sort,
  slice,
  descend,
  gte,
} = require("ramda");

const menu = [
  {
    name: "Lamb Gyro",
    price: 11.86,
    rating: 3.31,
  },
  {
    name: "Chicken Gyro",
    price: 11.48,
    rating: 3.84,
  },
  {
    name: "Mixed Gyro",
    price: 11.69,
    rating: 4.81,
  },
  {
    name: "Jumbo Lamb",
    price: 12.31,
    rating: 2.32,
  },
  {
    name: "Lamb Kebab",
    price: 8.85,
    rating: 4.82,
  },
  {
    name: "Jumbo Mixed",
    price: 14.96,
    rating: 3.37,
  },
  {
    name: "Chicken Wings",
    price: 11.17,
    rating: 3.56,
  },
  {
    name: "Biggie Fries",
    price: 14.36,
    rating: 3.86,
  },
  {
    name: "Medium Fries",
    price: 10.36,
    rating: 4.96,
  },
  {
    name: "Medium Curly Fries",
    price: 10.37,
    rating: 2.52,
  },
  {
    name: "Biggie Curly Fries",
    price: 15.07,
    rating: 3.73,
  },
  {
    name: "House Salad",
    price: 11.39,
    rating: 4.86,
  },
  {
    name: "Apartment Salad",
    price: 14.38,
    rating: 2.8,
  },
  {
    name: "Steak",
    price: 12.5,
    rating: 4.06,
  },
  {
    name: "Shrimp Gyro",
    price: 14.57,
    rating: 3.48,
  },
];

const byPrice = descend(prop("rating"));

const getTop3MealsFor = pipe(
  (maxPrice, menu) => menu.filter(propSatisfies(gte(maxPrice), "price")),
  sort(byPrice),
  slice(0, 3)
);

console.log(getTop3MealsFor(20, menu));
