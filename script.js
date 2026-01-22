let taskList = [];
let taskId = 0;

function addTask() {
    const taskName = document.getElementById("taskName").value;

    if (taskName === "") return;

    const Task = {
        taskId: taskId++,
        taskName: taskName,
        isCompleted: false
    };

    taskList.push(Task);
    document.getElementById("taskName").value = "";
    displayTasks();
}

function displayTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    taskList.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task.taskName;

        if (task.isCompleted) {
            li.classList.add("completed");
        }

        li.onclick = () => toggleTask(task.taskId);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = (e) => {
            e.stopPropagation();
            deleteTask(task.taskId);
        };

        li.appendChild(deleteBtn);
        list.appendChild(li);
    });
}

function toggleTask(taskId) {
    taskList = taskList.map(task =>
        task.taskId === taskId
            ? { ...task, isCompleted: !task.isCompleted }
            : task
    );
    displayTasks();
}

function deleteTask(taskId) {
    taskList = taskList.filter(task => task.taskId !== taskId);
    displayTasks();
}
