const paragraph = document.getElementsByTagName('p');
const fontColorInput = document.getElementById('color-select')
const bckgrdInput = document.getElementById('background');
const sizeSelect = document.getElementById('size-select')
const spaceSelect = document.getElementById('space-select');
const fontSelect = document.getElementById('font-select');
bckgrdInput.addEventListener('change',changeBackgroundColor);
function changeBackgroundColor() {
  let color= bckgrdInput.value;
  localStorage.setItem('backGroundColor', optionFont)
  paragraph[0].style.backgroundColor = color;
}

fontColorInput.addEventListener('change', changeFontColor)
function changeFontColor() {
  let color=fontColorInput.value;
  localStorage.setItem('fontColor', optionFont)
  paragraph[0].style.color = color;
}
function fontSize(array) {
  for (let px = 0; px < array.length; px += 1) {
    const option = document.createElement('option');
    option.value = array[px];
    option.innerText = array[px];
    sizeSelect.appendChild(option);
  }
}
fontSize(["20px", "22px", "24px", "26px"])
sizeSelect.addEventListener('change', selectFontSize)
function selectFontSize() {
  let optionSize = sizeSelect.value
  localStorage.setItem('fontSize', optionFont);
  paragraph[0].style.fontSize = optionSize;
}
selectFontSize()
function selectLineHeight(array) {
  for (let px = 0; px < array.length; px += 1) {
    const option = document.createElement('option');
    option.value = array[px];
    option.innerText = array[px];
    spaceSelect.appendChild(option);
  }
}
selectLineHeight(['15px','20px', '25px'])
spaceSelect.addEventListener('change', lineHeight)

function lineHeight() {
  let optionHeight = spaceSelect.value
  paragraph[0].style.lineHeight = optionHeight;
  localStorage.setItem('lineHeight', paragraph[0].style.lineHeight);
}

function font(array) {
  for (let i = 0; i < array.length; i += 1) {
    const option = document.createElement('option');
    option.value = array[i];
    option.innerText = array[i];
    fontSelect.appendChild(option);
  }
}
font(['Arial', 'Georgia','Verdana']);
fontSelect.addEventListener('change', changeFont);

function changeFont() {
  let optionFont = fontSelect.value
  paragraph[0].style.fontFamily = optionFont
  localStorage.setItem('font', JSON.parse)
}
