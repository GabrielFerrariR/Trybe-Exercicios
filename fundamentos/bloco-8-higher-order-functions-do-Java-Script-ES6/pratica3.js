const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  // Adicione seu código aqui:
  const fiveLettersName = names.find((name) => name.length === 5);
  return fiveLettersName
}
console.log(findNameWithFiveLetters());
