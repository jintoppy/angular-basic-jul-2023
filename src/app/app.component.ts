import { Component } from '@angular/core';
import { User } from './types';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  imgUrl = 'https://i.imgur.com/XgbZdeA.jpeg';
  title = 'angular-basic';
  value: string = '';
  users: User[] = [];
  classes = {
    name: true,
    filled: false,
  };

  styles = {
    color: 'red',
    'font-weight': 400,
  };

  filteredUsers: User[] = [];
  selectedUser: User | null = null;

  constructor(private appSvc: AppService) {}

  ngOnInit() {
    this.appSvc.getUsers().subscribe((users) => {
      this.users = users;
      this.filteredUsers = [...this.users];
    });
  }

  filterUsers() {
    this.filteredUsers = this.users.filter((user) =>
      user.name.toLowerCase().includes(this.value.toLowerCase())
    );
  }

  onSearch() {
    this.filterUsers();
    this.classes = {
      name: false,
      filled: true,
    };
    this.styles = {
      color: 'green',
      'font-weight': 700,
    };
  }

  onSelectUser(user: User) {
    this.selectedUser = user;
  }

  onUpdateValue() {
    this.value = 'updated';
  }
}
