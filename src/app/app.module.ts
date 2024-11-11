// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { AppRoutingModule } from './app-routing.module';
import { TaskService } from './task.service';

@NgModule({
  declarations: [
    AppComponent, // Include AppComponent here
    TaskListComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent] // Bootstrap AppComponent here
})
export class AppModule { }
