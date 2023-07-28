import { Component, Input, EventEmitter, Output } from '@angular/core';
import { GithubUser } from 'src/app/types';

@Component({
  selector: 'app-github-user-details',
  templateUrl: './github-user-details.component.html',
  styleUrls: ['./github-user-details.component.css'],
})
export class GithubUserDetailsComponent {
  @Input()
  user!: GithubUser;

  @Output()
  onUserSelect: EventEmitter<GithubUser> = new EventEmitter();

  onBtnClick() {
    this.onUserSelect.emit(this.user);
  }
}
