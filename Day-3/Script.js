document.addEventListener('DOMContentLoaded', () => {

const input = document.querySelector('.input');
const output = document.querySelector('.output');
const keys = document.querySelectorAll('.key')

let currentInput = '';
let lastAnswer = '';

//Function for butotns
function buttonClicks(event) {
    const key = event.target.closest('.key');
    if(!key) return;
    const keyValue = key.getAttribute('data-key');

    if(keyValue === 'clear') {
        currentInput = '';
        output.textContent = '';
    } else if(keyValue === 'backspace') {
        currentInput = currentInput.slice(0, -1);
        console.log("backspace is clicked")
    } else if(keyValue === 'equal') {
        try{
            const result = eval(currentInput);
            output.textContent = result;
            lastAnswer = result;
        } catch(error) {
            output.textContent = 'Math Error';
        }
    }else if(keyValue === 'answer') {
            currentInput += lastAnswer;
    }else if(keyValue === 'pi') {
        currentInput += Math.PI.toFixed(4);
    } else if(keyValue === 'On'){
        currentInput = '0';
    } else if(keyValue === 'off'){
        currentInput = '';
    } else{
        currentInput += keyValue;
    }
    input.textContent = currentInput || '0' ;
}

keys.forEach(keys => {
    keys.addEventListener('click', buttonClicks);
})
input.textContent = '0';
output.textContent = '';

})