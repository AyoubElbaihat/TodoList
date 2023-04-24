import { UserTasks } from "./services/service.js";

const taskListItem = document.getElementById('tasks');
const userTasks = new UserTasks();
const tasks = userTasks.getTasks();


for (const task of tasks) {
    displayTask(task);
}

function displayTask(task) {
    const tache = `
    <div class="item">
        <input class="check" type="checkbox">
        <p>${task.task}</p>
        <button class="btn"><i class="fa fa-trash"></i></button>
    </div>`;
    taskListItem.innerHTML += tache;
}

const allbtn = document.querySelectorAll('.btn');
allbtn.forEach((button, index) => {
    button.addEventListener('click', () => {
        userTasks.deleteTasks(index);
        button.parentNode.remove();
    });
});


const allbox = document.querySelectorAll('.check');
allbox.forEach((input, index) => {
    input.addEventListener('click', ()=> {
        userTasks.updateTask(index, input);
    });
});
