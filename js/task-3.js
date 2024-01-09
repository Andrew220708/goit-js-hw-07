const nameInput = document.querySelector('#name-input');
// console.log(nameInput);
const nameOutput = document.querySelector('#name-output');
// console.dir(nameOutput);

nameInput.addEventListener('input', (e) => {
    console.log(e.target.value);
    nameOutput.textContent = `${e.target.value}`;
    
    if (nameInput.value === '' || nameInput.value=== ' ') {
      nameOutput.textContent = 'Anonymous';
    } 
      
});
