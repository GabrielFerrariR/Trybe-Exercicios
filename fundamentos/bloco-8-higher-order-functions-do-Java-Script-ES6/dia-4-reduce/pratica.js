const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
const evens = numbers.filter((number) => number % 2 === 0);
const evensSum = evens.reduce((acc, number) =>  acc + number)
console.log(evensSum);
