function exercicio1(num) {
  if (typeof num != 'number') throw new Error('o valor deve ser um número');

  if (num > 0 ) return 'positivo';
  if (num < 0 ) return 'negativo';
  return 'neutro';
}

module.exports = exercicio1;