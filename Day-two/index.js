document.addEventListener('DOMContentLoaded', () => {
const clock = document.getElementById('clock');
const date = document.getElementById('date');

//Date function
function updateDate() {


}

//Clock function
function updateClock() {
    const today = new Date;
    const HH = today.getHours();
    const MM = today.getMinutes();  
    const SS = today.getSeconds();

    clock.textContent = `${HH}:${MM}:${SS}`;

}

setInterval(updateClock, 1000)
updateClock()



})