import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { TasksComponent } from './components/tasks/tasks.component';

import { DUMMY_USERS } from './dummy-users';

interface User {
  id: string;
  name: string;
  avatar: string;
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users: User[] = DUMMY_USERS;
  selectedUser: User | null = null;

  onSelectUser(id: string) {
    this.selectedUser = this.users.find((user) => user.id === id) || null;
  }
}
