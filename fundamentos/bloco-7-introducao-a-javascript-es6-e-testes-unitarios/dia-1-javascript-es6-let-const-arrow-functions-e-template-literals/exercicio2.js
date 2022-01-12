const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordenar = array => {
  array.sort((a, b) => a - b);
  return array
}

console.log(ordenar(oddsAndEvens)); // será necessário alterar essa linha 😉
