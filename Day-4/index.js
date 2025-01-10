document.addEventListener('DOMContentLoaded', () => {

const color = document.getElementById('color');
const changeColor = document.getElementById('btn');

//function to update the color change
function randomColor() {
    const hexColor = Math.floor(Math.random() * 164568).toString(16);
    return `#${hexColor.padStart(6, '1')}`;
}

function backgroundColor() {

    const newColor = randomColor();
    document.body.style.backgroundColor = newColor;
    color.textContent  = newColor;
}
backgroundColor()

changeColor.addEventListener('click', backgroundColor);
});