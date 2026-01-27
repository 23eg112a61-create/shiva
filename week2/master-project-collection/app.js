// app.js - Main application
import { addTask, getAllTasks, completeTask } from './task.js';

console.log('=== Task Management System ===\n');

// 1. Add some tasks
console.log('Adding Tasks:');
console.log(addTask('Finish assignment', 'high', '2026-02-01'));
console.log(addTask('Buy groceries', 'medium', '2026-01-30'));
console.log(addTask('Go jogging', 'low', '2026-02-05'));

// 2. Display all tasks
console.log('\nAll Tasks:');
console.log(getAllTasks());

// 3. Complete a task
console.log('\nCompleting Task with ID 2:');
console.log(completeTask(2));

// 4. Display all tasks again
console.log('\nUpdated Tasks:');
console.log(getAllTasks());