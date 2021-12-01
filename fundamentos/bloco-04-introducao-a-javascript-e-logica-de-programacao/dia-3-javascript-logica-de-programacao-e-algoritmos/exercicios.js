// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .
let n = 4
let nString = ''
for (let i = 0; i < n; i += 1) {
  nString += '*'
}
for (let i = 0; i < n; i += 1) {
  if (n > 1) {
    console.log(nString)
  } else {
    console.log('Insira um valor de n maior que 1')
  }
}
// 2 -Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.
console.log('------------------')

let nString2 = ''
if (n > 1) {
  for (let i = 0; i < n; i += 1) {
    nString2 += '*'
    console.log(nString2)
  }
} else {
  console.log('Insira um valor de n maior que 1')
}

//3- Agora inverta o lado do triângulo.
console.log('------------------')

let string= ''
let position = n
for (let index = 0; index <= n; index += 1) {
  for (let i = 0; i < n; i += 1) {
    string+= ' '
    if (i == position) {
      string+= '*'.repeat(index)
      console.log(string)
    }
  }
  string = ''
  position -= 1
}
