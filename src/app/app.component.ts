import { Component } from '@angular/core';

type User = {
  name: string;
  age: number;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  imgUrl = 'https://i.imgur.com/XgbZdeA.jpeg';
  title = 'angular-basic';
  value: string = '';
  classes = {
    name: true,
    filled: false,
  };

  styles = {
    color: 'red',
    'font-weight': 400,
  };

  users: User[] = [
    { name: 'Abc', age: 10 },
    { name: 'Def', age: 10 },
  ];
  filteredUsers = [...this.users];
  selectedUser: User | null = null;

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
