
const num1Element = document.getElementById('num1');
const num2Element = document.getElementById('num2');
const sumBtn = document.getElementById('sum');
const subBtn = document.getElementById('sub');
const divBtn = document.getElementById('division');
const multBtn = document.getElementById('multiply');
const resultSpan = document.getElementById('result');

function valueCatch () {
  let num1Value = parseInt(num1Element.value)
  let num2Value = parseInt(num2Element.value)
  return {num1Value, num2Value}
}

sumBtn.addEventListener('click', sum)

function sum() {
  let { num1Value, num2Value } = valueCatch();
  let sum = num1Value + num2Value
  resultSpan.innerText = sum
}

subBtn.addEventListener('click', subtraction)

function subtraction() {
  let { num1Value, num2Value } = valueCatch();
  let sub = num1Value - num2Value
  resultSpan.innerText = sub
}

divBtn.addEventListener('click', division)


function division() {
  let { num1Value, num2Value } = valueCatch();
  let div = num1Value / num2Value
  resultSpan.innerText = div
}

multBtn.addEventListener('click', multiplication)
function multiplication() {
  let { num1Value, num2Value } = valueCatch();
  let mult = num1Value * num2Value
  resultSpan.innerText = mult
}

