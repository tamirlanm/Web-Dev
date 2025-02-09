function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value;
    if (taskText === "") return;

    let li = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onchange = function() {
        li.classList.toggle("done", checkbox.checked);
    };

    let span = document.createElement("span");
    span.textContent = taskText;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Del";
    deleteButton.onclick = function() {
        li.remove();
    };

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);
    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}