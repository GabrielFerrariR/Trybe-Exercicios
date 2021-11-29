/*
08 - Descubra a idade mínima
Escreva um algoritmo que recebe a idade de Marina, Silvia e Iza e retorne a mensagem informando a pessoa mais jovem no seguinte formato:
---------------------------------------------------
"x é a pessoa mais jovem e possui y anos de idade."
---------------------------------------------------
*/

function findYoungerPerson(marinaAge, silviaAge, izaAge){
  // Desenvolva seu código nessa função
  if(marinaAge < silviaAge && marinaAge < izaAge){
    return(`Marina é   mais jovem e possui ${marinaAge} anos de idade`)
  }
  if(silviaAge < marinaAge && silviaAge < izaAge){
    return(`Silvia é a pessoa mais jovem e possui ${silviaAge} anos de idade`)
  }else{
    return(`Iza é a pessoa mais jovem e possui ${izaAge} anos de idade`)
  }
}
console.log(findYoungerPerson(18,20,30))
console.log(findYoungerPerson(50,320,30))
console.log(findYoungerPerson(50,0.5,30))
module.exports = findYoungerPerson;