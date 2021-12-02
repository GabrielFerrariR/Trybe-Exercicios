// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .
// pega o nome e conta -- bota em uma variavel se numero é maior que o numero anterior - bota na variavel e bot aesse nome em outra variavel chama o nome no final
function biggestName(array){
  let count = 0
  let biggest = ''
  for (i = 0; i < array.length; i +=1){
    let strCount = array[i].length  
    if (strCount > count){
      count = strCount
      biggest = array[i]
    }
  }
  return biggest 
}


console.log(biggestName(['Carlos','Carla','Carlus','Godofredo','Giovanni Giorgio']))
// console.log(['Carlos','Carla','Carlus','Godofredo','Giovanni Giorgio'][0].length)