// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false


function verifyPalindrome(string){
  let stringSplit = string.split('')
  let reverseArray = stringSplit.reverse('')
  let reverseString = reverseArray.join('')
  if(string === reverseString){
    return true
  }else{
    return false
  }
}
console.log(verifyPalindrome("abata"))