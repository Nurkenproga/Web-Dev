document.addEventListener('DOMContentLoaded', function() {
    let input = document.querySelector(".enterance");
    let addBtn = document.querySelector(".add-list");
    let tasks = document.querySelector(".tasks");

    input.addEventListener('keyup', () => {
        if(input.value.trim() !== ''){
            addBtn.classList.add('active');
        } else {
            addBtn.classList.remove('active');
        }
    });

    function addTask(taskText) {
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
            <p>${taskText}</p>
            <div class="item-btn">
                <img src="pen-to-square-solid.svg" class="fa-pen-to-square" width="18">
                <img src="xmark-solid.svg" class="fa-xmark" width="18">
            </div>`;
        tasks.appendChild(newItem);
        input.value = '';
        taskList.push(taskText);
    }

    addBtn.addEventListener('click', () => {
        if (input.value.trim() !== '') {
            addTask(input.value.trim());
        } else {
            alert('Please enter a task');
        }
    });

    tasks.addEventListener('click', (e) => {
        if (e.target.classList.contains('fa-xmark')) {
            e.target.parentElement.parentElement.remove();

        } else if (e.target.classList.contains('fa-pen-to-square')) {
            e.target.parentElement.parentElement.classList.toggle('completed');
        }
    });

});