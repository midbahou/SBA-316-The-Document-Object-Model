const taskInput = document.getElementById("taskInput");
const button = document.querySelector("#btnInput");
const taskList = document.getElementById("taskList");


button.addEventListener("click", function(e) {
    e.preventDefault();
    
    if (taskInput.value.trim() !== "") {
        const li = createDeleteTask(taskInput.value.trim());
        taskList.appendChild(li);

        // Change button text temporarily to "Task Added"
        button.textContent = "Task Added!";
        setTimeout(() => button.textContent = "Add Task", 1000);

        // show the first element
        console.log("This is the first Task: ", taskList.firstElementChild.textContent);

        // Clear input after adding the task
        taskInput.value = ""; 

        // set the focus back to the input after adding a task
        taskInput.focus(); 

    } else {
     // throw an alert if an empty input (optional since we already have a required pattern in the input in the HTML file)
        alert("Please enter a task!"); 
    };

    // show the nextSibling element
    const firstLi = taskList.firstElementChild;
    while (firstLi.nextElementSibling) {
        console.log("This is the second Task (nextElementSibling): ", firstLi.nextElementSibling.textContent);
        break;
    }
    
});

function createDeleteTask (taskText){
    const li = document.createElement('li');
    li.classList.add("container");
    li.textContent = taskText;
    
    // some li styles when hovering over li items
    li.style.cursor = "pointer";
    li.addEventListener("mouseenter", () => li.style.backgroundColor = "#f0f0f0");
    li.addEventListener("mouseleave", () => li.style.backgroundColor = "");
    // li.addEventListener("mouseenter", () => li.style.cursor = "pointer" )
    // li.style.backgroundColor = "blue";
    
    
    // let's create a delete button, to remove unwanted tasks
    const deleteBtn = document.createElement('span');
    
    // some of the delete button styles
    deleteBtn.textContent = "❌";
    deleteBtn.style.color = "red";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.style.cursor = "pointer";
    deleteBtn.title = "Delete-Task";
    
    deleteBtn.classList.add("delete-btn");
    li.appendChild(deleteBtn);
    
    // adding an event listener to the delete button
    deleteBtn.addEventListener("click", function(){
        if (confirm("Are you sure you want to delete this task?")) {
            taskList.removeChild(li);
        }
    });
    
    return li;    
}



function createTaskList() {
    const tasks = taskList.children; // this get all child elements (li items) inside the task list (ul)
    
    if (tasks.length === 0) {
        console.log("No tasks to display");
    } else {
        for(let task of tasks) {
            console.log(task.textContent); // iterates over each child element (li items) in the taskList        
        }
    }
}


window.addEventListener("load", createTaskList);




// ================== all the commented code ==================================


// if (firstLi.nextElementSibling){
    // console.log("This is the second Task (nextElementSibling): ", firstLi.nextElementSibling.textContent);
    // }
    
    
// taskList.createDeleteTask();



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
