import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks = new BehaviorSubject<Task[]>([]);
  tasks$ = this.tasks.asObservable();

  constructor() {}

  // Add a new task
  addTask(task: Task) {
    const currentTasks = this.tasks.getValue();
    this.tasks.next([...currentTasks, task]);
  }

  // Get all tasks
  getTasks() {
    return this.tasks$;
  }

  // Delete a task by id
  deleteTask(id: number) {
    const updatedTasks = this.tasks.getValue().filter(task => task.id !== id);
    this.tasks.next(updatedTasks);
  }
}

