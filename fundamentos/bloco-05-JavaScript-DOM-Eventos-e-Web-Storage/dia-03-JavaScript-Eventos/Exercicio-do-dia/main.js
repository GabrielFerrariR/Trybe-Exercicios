function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');
  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const daysUl = document.getElementById('days');

function createDayDigits(){
  for (let index = 0; index < dezDaysList.length; index += 1){
    const dayLi = document.createElement('li');
    dayLi.innerText = dezDaysList[index];
    dayLi.className = 'day'
    daysUl.appendChild(dayLi);
    if (dezDaysList[index] === 24 || dezDaysList[index] === 25|| dezDaysList[index] === 31 ) {
      dayLi.className += ' holiday' 
    } 
    if (dezDaysList[index] === 4 || dezDaysList[index] === 11|| dezDaysList[index] === 18 || dezDaysList[index] === 25 ) {
      dayLi.className += ' friday'
    }
  }
}
createDayDigits()

function createBtn(string) {
  const divButton = document.querySelector('.buttons-container');
  const button = document.createElement('button');
  button.id = "btn-holiday"
  button.innerText = string
  divButton.appendChild(button)
}
createBtn('Feriados')
const button = document.getElementById('btn-holiday')
button.addEventListener('click', colorChange);
function colorChange(){
  const holiday = document.getElementsByClassName('holiday')
  for ( let i = 0; i < holiday.length; i += 1) {
    if (holiday[i].style.backgroundColor === 'green' ){
    holiday[i].style.backgroundColor = 'rgb(238,238,238)'
    } else {
    holiday[i].style.backgroundColor = 'green'
    }
  }
}
function createFridayBtn(string){
  const divButton = document.querySelector('.buttons-container');
  const button = document.createElement('button');
  button.id = "btn-friday"
  button.innerText = string
  divButton.appendChild(button)
}
createFridayBtn('Sexta-feira') 
const FridayBtn = document.getElementById('btn-friday');
FridayBtn.addEventListener('click', fridayTextChange)

function fridayTextChange(){
  const fridays = document.getElementsByClassName('friday')
  const fridayDigits = [4, 11, 18, 25]
  for ( let i = 0; i < fridays.length; i += 1) {
    if (fridays[i].innerText === "Mufasa!") {
      fridays[i].innerText = fridayDigits[i]
    }
    else {
      fridays[i].innerText = "Mufasa!"}
  }
}
const dayCatch = document.getElementsByClassName('day')
console.log(dayCatch)
// for (let i = 0; i < dayCatch.length; i += 0) {
//   dayCatch[i].addEventListener('click',zooming)
// }

function zooming() {
  console.log('teste')
}
