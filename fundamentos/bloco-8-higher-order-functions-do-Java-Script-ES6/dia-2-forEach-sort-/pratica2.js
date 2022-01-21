const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  // Adiciona seu código aqui
  const divisble = numbers.find((number) => number % 5 === 0 && number % 3 === 0);
  return divisble
}

console.log(findDivisibleBy3And5())