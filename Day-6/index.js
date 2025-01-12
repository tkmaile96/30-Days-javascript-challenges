document.addEventListener('DOMContentLoaded', () => {
    const newTaskInput = document.getElementById('new-task');
    const addButton = document.getElementById('btn');
    const container = document.querySelector('.container');

    // Function to add a new task
    function addTask() {
        const taskValue = newTaskInput.value.trim();
        
        if (taskValue === '') {
            alert('Please enter a task!');
            return;
        }

        // Create a new task element
        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';

        const taskText = document.createElement('span');
        taskText.textContent = taskValue;

        // Add event listener to strike through the task
        taskText.addEventListener('click', () => {
            taskText.classList.toggle('completed');
        });

        const closeButton = document.createElement('button');
        closeButton.textContent = 'Close';
        closeButton.className = 'close-btn';

        // Add event listener to show the modal
        closeButton.addEventListener('click', () => {
            showModal(taskItem);
        });

        // Append text and close button to the task item
        taskItem.appendChild(taskText);
        taskItem.appendChild(closeButton);

        // Append task item to the container
        container.appendChild(taskItem);

        // Clear the input field
        newTaskInput.value = '';
    }

    // Function to show the confirmation modal
    function showModal(taskItem) {
        const modal = document.createElement('div');
        modal.className = 'modal';

        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';

        const message = document.createElement('p');
        message.textContent = 'Are you sure you want to close this task?';

        const confirmButton = document.createElement('button');
        confirmButton.textContent = 'Yes';
        confirmButton.className = 'confirm-btn';
        confirmButton.addEventListener('click', () => {
            container.removeChild(taskItem);
            document.body.removeChild(modal);
        });

        const cancelButton = document.createElement('button');
        cancelButton.textContent = 'No';
        cancelButton.className = 'cancel-btn';
        cancelButton.addEventListener('click', () => {
            document.body.removeChild(modal);
        });

        modalContent.appendChild(message);
        modalContent.appendChild(confirmButton);
        modalContent.appendChild(cancelButton);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
    }

    // Add event listener to the "Add" button
    addButton.addEventListener('click', addTask);

    // Add functionality to press Enter to add a task
    newTaskInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
