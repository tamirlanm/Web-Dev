function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <input type="checkbox" onclick="toggleDone(this)">
        <button class="delete" onclick="deleteTask(this)">Del</button>
      `;
    taskList.appendChild(li);
    taskInput.value = '';
}

function toggleDone(checkbox) {
    const li = checkbox.parentElement;
    li.classList.toggle('done');
}

function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}