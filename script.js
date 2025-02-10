const taskInput = document.getElementById("taskInput");
const button = document.querySelector("#btnInput");
const taskList = document.getElementById("taskList");


button.addEventListener("click", function(e) {
    e.preventDefault();
    
    if (taskInput.value.trim() !== "") {
        const li = createDeleteTask(taskInput.value.trim());
        taskList.appendChild(li);
        // show the first element
        console.log("This is the first Task: ", taskList.firstElementChild.textContent);

        taskInput.value = ""; // Clear input after adding the task

    } else {
        alert("Please enter a task!"); // throw an alert if an empty input (optional since we already have a required pattern in the input in the HTML file)
    };

    // show the nextSibling element
    const firstLi = taskList.firstElementChild;
    while (firstLi.nextElementSibling) {
        console.log("This is the second Task (nextElementSibling): ", firstLi.nextElementSibling.textContent);
        break;
    }
    
    // if (firstLi.nextElementSibling){
    // console.log("This is the second Task (nextElementSibling): ", firstLi.nextElementSibling.textContent);
    // }
});

function createDeleteTask (taskText){
    const li = document.createElement('li');
    li.classList.add("container");
    li.textContent = taskText;

    // let's create a delete button, to remove unwanted tasks
    const deleteBtn = document.createElement('span');
    deleteBtn.textContent = "X";
    deleteBtn.style.color = "red";
    deleteBtn.classList.add("delete-btn");
    li.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", function(){
        taskList.removeChild(li);
    });

    return li;    
}

taskInput.deleteTask();

// taskList.forEach(task => {
//     console.log(task.textContent);
    
// });
// const task = taskList.children;
// for (let task of taskList){
//     console.log(task.textContent);
    
// };
// button.onclick = function() {
//     const li = document.createElement("li");
//     li.textContent = taskInput.value;
//     li.classList.add("container");
//     taskList.appendChild("li");
// }
