let taskList =
document.getElementById("taskList");
function addTask(){
    let taskInput =
    document.getElementById("taskInput");
    let taskDate =
    document.getElementById("taskDate");
    let taskText =
    taskInput.value;
    if(taskText === ""){
        alert("Please enter a task");
        return;
    }
    let li =
    document.createElement("li");
    li.innerHTML = `
        <strong>${taskText}</strong>
        <br>
        ${taskDate.value}
        <br>
        <button
        class="complete-btn"
        onclick="completeTask(this)">
        Complete
        </button>
        <button
        class="edit-btn"
        onclick="editTask(this)">
        Edit
        </button>
        <button
        class="delete-btn"
        onclick="deleteTask(this)">
        Delete
        </button>
    `;
    taskList.appendChild(li);
    taskInput.value = "";
    taskDate.value = "";
}

function completeTask(button){
    let task =
    button.parentElement;
    task.classList.toggle("completed");
}

function editTask(button){
    let task =
    button.parentElement;
    let title =
    task.querySelector("strong");
    let newTask =
    prompt(
        "Edit Task",
        title.innerText
    );
    if(newTask){

        title.innerText =
        newTask;
    }
}

function deleteTask(button){
    let task =
    button.parentElement;
    task.remove();
}
