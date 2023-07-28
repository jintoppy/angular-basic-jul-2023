import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GithubSearchResponse, GithubUser } from './types';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getUsers(searchText: string): Observable<GithubUser[]> {
    const url = `https://api.github.com/search/users?q=${searchText}`;
    return this.http
      .get<GithubSearchResponse>(url)
      .pipe(map((response) => response.items));
  }
}
