/*
File Name: ComplexCode.js

This complex code demonstrates a comprehensive implementation of a task management system using JavaScript. It incorporates various advanced programming concepts and best practices, providing a sophisticated and elaborate solution.

*/

// Class representing a Task
class Task {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.completed = false;
  }

  markComplete() {
    this.completed = true;
  }
}

// Class representing a Project
class Project {
  constructor(title) {
    this.title = title;
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }
}

// Class representing the Task Manager
class TaskManager {
  constructor() {
    this.projects = [];
  }

  createProject(title) {
    const project = new Project(title);
    this.projects.push(project);
    return project;
  }

  getProjectIndex(project) {
    return this.projects.findIndex((p) => p === project);
  }

  removeProject(project) {
    const index = this.getProjectIndex(project);
    if (index !== -1) {
      this.projects.splice(index, 1);
    }
  }
}

// Create Task Manager instance
const taskManager = new TaskManager();

// Create sample projects and tasks
const project1 = taskManager.createProject("Project 1");
const project2 = taskManager.createProject("Project 2");

const task1 = new Task("Task 1", "Description of Task 1");
const task2 = new Task("Task 2", "Description of Task 2");
const task3 = new Task("Task 3", "Description of Task 3");

project1.addTask(task1);
project1.addTask(task2);
project2.addTask(task3);

task1.markComplete();

console.log(taskManager); // Output the Task Manager object

// More complex functionalities can be added based on requirements

// ...
// ...

// End of ComplexCode.js