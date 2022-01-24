
const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};
const desconstrucObj = {...user, ...jobInfos}
function string({name, age, nationality, profession, squad , squadInitials}) {
  return `Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as ${profession}, and my squad is ${squadInitials}-${squad}`
}
console.log(string(desconstrucObj))
// Com o objeto em mãos, imprima no console uma frase utilizando os dados do objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template literals .
// Exemplo "Hi, my name is Maria, I'm 21 years old and I'm Brazilian. I work as a Software engineer and my squad is RLL-Rocket Landing Logic"
