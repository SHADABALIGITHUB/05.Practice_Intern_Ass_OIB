// Store tasks in arrays
let pendingTasks = [];
let completedTasks = [];
let deletedTasks = [];

// Function to add a new task
function addTask() {
  const taskInput = document.getElementById('addTaskInput');
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const task = {
    text: taskText,
    added: new Date(),
    completed: null
  };

  pendingTasks.push(task);
 taskInput.value = '';

  updateLists();
}

// Function to update task lists
function updateLists() {
  updateTaskList(pendingTasks, 'pendingTasksList', false);
  updateTaskList(completedTasks, 'completedTasksList', true);
  updateDeletedTasksList();
}

// Function to update a specific task list
function updateTaskList(tasks, listId, isCompleted) {
  const taskList = document.getElementById(listId);
  taskList.innerHTML = '';

  tasks.forEach(task => {
    const taskItem = createTaskItem(task, isCompleted);
    taskList.appendChild(taskItem);
  });
}
// Function to create task item
function createTaskItem(task, isCompleted) {
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item' + (isCompleted ? ' completed' : '');
    taskItem.textContent = task.text + ' ( Added: ' + task.added.toLocaleString();
  
    if (isCompleted) {
      taskItem.textContent += ', Completed: ' + task.completed.toLocaleString();
    }
    //  shadab  //taskItem.textContent += ')';
  
    // Check if the task is deleted
    const deletedTaskInfo = deletedTasks.find(info => info.task === task);
    if (deletedTaskInfo) {
      isCompleted = deletedTaskInfo.isCompleted;
      taskItem.textContent += ' [Deleted from ' + (!isCompleted ? 'Completed' : 'Pending') + ' List]';
    } else {
      // Button to mark as complete
      if (!isCompleted) {
        const completeButton = document.createElement('button');
        completeButton.setAttribute('id', 'complete');
        completeButton.textContent = 'Complete';
        completeButton.onclick = function() {
          completeTask(task);
        };
        taskItem.appendChild(completeButton);
      }
  
      // Button to delete task
      const deleteButton = document.createElement('button');
      deleteButton.setAttribute('id', 'Delete');
      deleteButton.textContent = 'Delete';
      
      deleteButton.onclick = function() {
        deleteTask(task, isCompleted);
      };
      taskItem.appendChild(deleteButton);
    }
  
    return taskItem;
  }
  
  

// Function to mark a task as completed
function completeTask(task) {
  task.completed = new Date();
  completedTasks.push(task);
  pendingTasks = pendingTasks.filter(t => t !== task);
  updateLists();
}

// Function to move a task to the deletedTasks array
function moveToDeletedTasks(task) {
    const isCompleted = completedTasks.some(t => t === task);
  if (!deletedTasks.some(t => t.task === task)) {
    deletedTasks.push({ task: task, isCompleted: isCompleted});
    updateLists();
  }
}

// Function to delete a task
function deleteTask(task, isCompleted) {
  if (isCompleted) {
    completedTasks = completedTasks.filter(t => t !== task);
  } else {
    pendingTasks = pendingTasks.filter(t => t !== task);
  }

  moveToDeletedTasks(task);
}

// Function to update deleted tasks list
function updateDeletedTasksList() {
  const deletedTasksList = document.getElementById('deletedTasksList');
  deletedTasksList.innerHTML = '';

  deletedTasks.forEach(taskInfo => {
    const taskItem = createTaskItem(taskInfo.task, taskInfo.isCompleted);
    taskItem.textContent += ' [Deleted from ' + (taskInfo.isCompleted ? 'Completed' : 'Pending') + ' List]';
    deletedTasksList.appendChild(taskItem);
  });
}

// Initial update of all lists
function updateAllLists() {
  updateLists();
  updateDeletedTasksList();
}

// Initial update of lists
updateAllLists();
