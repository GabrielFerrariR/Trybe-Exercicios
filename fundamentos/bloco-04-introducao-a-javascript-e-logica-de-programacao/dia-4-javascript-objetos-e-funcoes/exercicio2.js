// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .



function inteiroMaior(array){
  let maior = 0  
for (i=0; i < array.length; i += 1){
  if (array[i] > maior){
    maior = array[i]
  }  
}
let position = array.indexOf(maior)
return position
}


console.log(inteiroMaior([3,3,5,115,2,3]))