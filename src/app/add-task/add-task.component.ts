import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  title = '';
  description = '';
  dueDate = '';
  priority: 'Low' | 'Medium' | 'High' = 'Low';

  constructor(private taskService: TaskService) {}

  addTask() {
    const newTask: Task = {
      id: 0, // ID will be set in the service
      title: this.title,
      description: this.description,
      dueDate: new Date(this.dueDate),
      priority: this.priority
    };
    this.taskService.addTask(newTask);

    // Clear the form
    this.title = '';
    this.description = '';
    this.dueDate = '';
    this.priority = 'Low';
  }
}
