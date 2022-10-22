// Data Types

// 1. primitive data types
const firstName = "Soahm";

const age = 32;

const isMarried = false;

const score = null;

const noData = undefined;

const sym = Symbol("foo");

const big = BigInt(9007199254740991);

console.log(sym);
console.log(big);

// typeof operator
console.log(typeof firstName);
console.log(typeof isMarried);
console.log(typeof big);

// 2. Non primitive data types
const person = {
  name: "virat",
  age: 33,
  isMarried: true,
};

console.log(person);
console.log(typeof person);
