---
title: "Observer Pattern in Todolist App"
description: "What is Observer Pattern and how to implement it in todolist app?"
date: "2025-03-06"
---

![Observer Pattern](/blog/observer-pattern-todolist.png)

## Introduction

Observer Pattern is a design pattern that allows objects to subscribe to changes in another object and be notified when the object changes. This pattern can be used in a todolist app to reactively update the UI whenever the user adds, removes, or completes a task.

## Observer Pattern in a nutshell

The Observer Pattern consists of two main components:

- Subject/Observable: The object that is being observed. It has a list of observers and can notify them when it changes.
- Observer: The object that is observing the subject. It has a reference to the subject and is notified when the subject changes.

## Example

In the following example, we have a Subject (TaskManager) that is being observed by an Observer (TaskListUI). When the TaskManager changes, the UI is notified and is updated accordingly. 

```javascript
class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
    this.notify();
  }

  removeTask(task) {
    this.tasks = this.tasks.filter(t => t !== task);
    this.notify();
  }

  completeTask(task) {
    task.completed = true;
    this.notify();
  }

  notify() {
    this.observers.forEach(observer => observer.update(this.tasks));
  }
}

## How to implement the Observer Pattern in a todolist app