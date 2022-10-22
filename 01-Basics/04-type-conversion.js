const num1 = "42";

const age = 22;

console.log(typeof age);

// first way convert string to number
// let convertToString = age + "";
// console.log(typeof convertToString);
// console.log(convertToString);

// first way convert string to number
// let convertToNumber = +num1;
// console.log(typeof convertToNumber);
// console.log(convertToNumber);

// second way convert string to number
console.log(typeof Number(num1));

// second way convert number to string
console.log(typeof String(age));
