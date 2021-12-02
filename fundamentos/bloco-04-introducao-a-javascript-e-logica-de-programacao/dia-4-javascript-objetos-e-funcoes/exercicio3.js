// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function inteiroMaior(array){
  let menor = array[0]
for (i=0; i < array.length; i += 1){
  if (array[i] < menor){
    menor = array[i]
  }  
}
let position = array.indexOf(menor)
return position
}


console.log(inteiroMaior([3,6,5,115,2,4]))