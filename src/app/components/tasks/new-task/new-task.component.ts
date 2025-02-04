import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancel() {
    this.cancel.emit();
  }

  onCreateTask() {
    console.log(`Creating task with title: ${this.enteredTitle}, summary: ${this.enteredSummary}, due date: ${this.enteredDate}`);
    this.add.emit({ title: this.enteredTitle, summary: this.enteredSummary, dueDate: this.enteredDate } as NewTaskData);
  }
}
