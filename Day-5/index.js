document.addEventListener('DOMContentLoaded',() => {

    const add = document.getElementById('add');
    const subtract = document.getElementById('subtract');
    const reset = document.getElementById('reset');
    const counter = document.getElementById('counter');

    let count = 0;

    function updateCount() {
        counter.textContent = count;
    }

    //Add
    add.addEventListener('click', () => {
        count+=1;
        updateCount();
    })

    //Subtract
    subtract.addEventListener('click', () => {
        count-=1;
        updateCount();
    })

    //Reset
    reset.addEventListener('click', () => {

        count = 0
        updateCount();
    })

});




