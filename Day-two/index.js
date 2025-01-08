document.addEventListener('DOMContentLoaded', () => {
const clock = document.getElementById('clock');
const date = document.getElementById('date');

//Date function
function updateDate() {
 const today = new Date("01/08/2025");

 const DD = today.getDate();
 const MM = today.getMonth() + 1;
 const YYYY = today.getFullYear();

 date.textContent = `${DD}/${MM}/${YYYY}`;

}

updateDate();

//Clock function
function updateClock() {
    const today = new Date();
    const HH = today.getHours();
    const MM = today.getMinutes();
    const SS = today.getSeconds();


    clock.textContent = `${HH}:${MM}:${SS}`;

}

setInterval(updateClock, 1000)
updateClock()



})