import { Injectable } from '@angular/core';
import { User } from './types';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  url = 'https://64c0e627fa35860bae9f99a4.mockapi.io/api/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    const obs1 = this.http.get<User[]>(this.url);
    const obs2 = obs1.pipe(
      map((users) => {
        return users.map((u) => {
          return {
            ...u,
            name: `${u.id}: ${u.name}`,
          };
        });
      })
    );

    return obs2;
  }
}
