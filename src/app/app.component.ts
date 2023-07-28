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
  student1 = 'Arun';
  student2 = 'Ajay';
  value: string = '';
  users: User[] = [];
  classes = {
    name: true,
    filled: false,
  };

  student1Details: User = {
    name: 'aaaa',
    age: 10,
    id: '10',
  };

  styles = {
    color: 'red',
    'font-weight': 400,
  };

  filteredUsers: User[] = [];
  selectedUser: User | null = null;

  constructor(private appSvc: AppService) {}

  ngOnInit() {
    this.appSvc.getUsers().subscribe({
      next: (users) => {
        this.users = users;
        this.filteredUsers = [...this.users];
      },
      error: () => {},
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

  dogImages = [
    'https://i.imgur.com/XgbZdeA.jpeg',
    'https://i.imgur.com/jf1v2jC.jpeg',
    'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg',
    'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_16x9.jpg',
  ];

  catImages = [
    'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
    'https://img.freepik.com/free-photo/red-white-cat-i-white-studio_155003-13189.jpg?size=626&ext=jpg',
    'https://cdn.britannica.com/25/7125-050-67ACEC3C/Abyssinian-sorrel.jpg',
  ];

  catSlideshowEnded = false;
  dogSlideshowEnded = false;

  handleDogSlideshowEnd() {
    this.dogSlideshowEnded = true;
  }

  handleCatSlideshowEnd() {
    this.catSlideshowEnded = true;
  }
}
