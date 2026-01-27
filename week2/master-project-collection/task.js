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