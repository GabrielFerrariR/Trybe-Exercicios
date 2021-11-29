let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// // Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
// for (let index =0; index < numbers.length; index +=1){
//   console.log('-')
//   console.log(numbers[index])
// }

// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let sum = 0
for (let index =0; index < numbers.length; index +=1){
  sum += numbers[index]
}
console.log(sum)
// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let media = sum / numbers.length
console.log(media)
// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
if (media > 20){
  console.log('Valor maior que 20')
}else{
  console.log('Valor menor ou igual a 20')
}
// Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let maior = numbers[0]
for (let index = 0; index < numbers.length; index +=1){
  if (numbers[index] > maior){
    maior = numbers[index]
  }
}
console.log(maior)
// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let impar = 0
for (let index = 0; index < numbers.length; index +=1){
  if ( numbers[index] % 2 != 0){
    impar += 1
  }
}
if (impar == 0){
  console.log('Nenhum valor impar encontrado')
}else{
  console.log(impar)
}
// Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let menor = numbers[0]
for (let index = 0; index < numbers.length; index +=1){
  if (numbers[index] < menor){
    menor = numbers[index]
  }
}
console.log(menor)

// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let arrayNum = []
for (let index =1; index < 26; index += 1){
  arrayNum.push(index)
}
console.log(arrayNum)
// Utilizando o arrayNum criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
let divisao = 0
for (let index = 0; index < arrayNum.length; index += 1){
  divisao = arrayNum[index]/2;
  console.log(divisao)
}

