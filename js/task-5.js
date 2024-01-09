function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const clickMe = document.querySelector('.change-color');
const colorBox = document.querySelector('.color');
clickMe.addEventListener('click', (event) => {
colorBox.style.backgroundColor = getRandomHexColor();
});