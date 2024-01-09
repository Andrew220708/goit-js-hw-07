function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const formInput = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');
function destroyEl() {
  boxes.textContent = '';
}
function createBoxes(amount) {
  destroyEl();
  for (let i = 0; i < amount; i++) {
    let size = 30 + 10 * i;
    const divBox = document.createElement('div');
    divBox.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}`;
    boxes.insertAdjacentElement('beforeend', divBox);
  }
  formInput.value = '';
}
btnCreate.addEventListener('click', () => {
  const value = Number(formInput.value);
  if (1 <= value && value <= 100) {
    createBoxes(value);
  }
});
btnDestroy.addEventListener('click', destroyEl);