// task.js - Task operations
import { validateTitle, validatePriority, validateDueDate } from './validator.js';

const tasks = [];
let taskIdCounter = 1;

// 1. Add new task
export function addTask(title, priority, dueDate) {
  const titleCheck = validateTitle(title);
  if (!titleCheck.valid) return { success: false, message: titleCheck.message };

  const priorityCheck = validatePriority(priority);
  if (!priorityCheck.valid) return { success: false, message: priorityCheck.message };

  const dateCheck = validateDueDate(dueDate);
  if (!dateCheck.valid) return { success: false, message: dateCheck.message };

  const newTask = {
    id: taskIdCounter++,
    title,
    priority: priority.toLowerCase(),
    dueDate: new Date(dueDate),
    completed: false
  };

  tasks.push(newTask);
  return { success: true, message: 'Task added successfully', task: newTask };
}

// 2. Get all tasks
export function getAllTasks() {
  return tasks;
}

// 3. Mark task as complete
export function completeTask(taskId) {
  const task = tasks.find(t => t.id === taskId);
  if (!task) {
    return { success: false, message: 'Task not found' };
  }
  task.completed = true;
  return { success: true, message: 'Task marked as complete', task };
}
 Methods Used in task.js
1. validateTitle(), validatePriority(), validateDueDate()
Purpose: These are custom validation functions (imported from validator.js) that check whether the task’s title, priority, and due date are valid.

Use case: Ensures that only properly formatted and meaningful data is added to the task list.

2. push()
Purpose: Adds a new element to the end of an array.

Use case in code:

javascript
tasks.push(newTask);
This stores the newly created task inside the tasks array.

3. find()
Purpose: Returns the first element in an array that satisfies a condition.

Use case in code:

javascript
const task = tasks.find(t => t.id === taskId);
This locates the task with the matching id.

4. toLowerCase()
Purpose: Converts a string to lowercase.

Use case in code:

javascript
priority: priority.toLowerCase()
This ensures that priority values (e.g., "HIGH", "High") are stored consistently in lowercase.

5. new Date()
Purpose: Creates a new JavaScript Date object.

Use case in code:

javascript
dueDate: new Date(dueDate)
This converts the provided due date string into a Date object for easier manipulation.

6. Return Objects ({ success, message, task })
Purpose: Instead of just returning raw values, each function returns a structured object with:

success → Boolean indicating if the operation worked.

message → Human-readable feedback.

task → The task object (when applicable).
