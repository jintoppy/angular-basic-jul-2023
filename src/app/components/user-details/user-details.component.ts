import { Component, Input } from '@angular/core';
import { User } from 'src/app/types';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent {
  @Input()
  userName: string = '';

  @Input()
  userDetails!: User;
}
