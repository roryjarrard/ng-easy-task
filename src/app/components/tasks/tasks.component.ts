import { Component, inject, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import type { NewTaskData, Task } from './task/task.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name?: string;
  private tasksService = inject(TasksService);
  showAddTask = false;

  

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.showAddTask = true;
  }

  onCloseAddTask() {
    this.showAddTask = false;
  }
}
