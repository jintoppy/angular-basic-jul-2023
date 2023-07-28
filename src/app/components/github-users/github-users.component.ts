import { Component, ViewEncapsulation } from '@angular/core';
import { GithubService } from 'src/app/github.service';
import { GithubUser } from 'src/app/types';

@Component({
  selector: 'app-github-users',
  templateUrl: './github-users.component.html',
  styleUrls: ['./github-users.component.css'],
})
export class GithubUsersComponent {
  searchText: string = '';
  users: GithubUser[] = [];

  constructor(private githubService: GithubService) {}

  onSearch() {
    this.users = [];
    if (!this.searchText) {
      return;
    }
    this.githubService.getUsers(this.searchText).subscribe({
      next: (users) => {
        this.users = users;
      },
    });
  }

  handleUserSelect() {
    console.log('user selected');
  }
}
