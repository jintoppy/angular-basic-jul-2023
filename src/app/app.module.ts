import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { GithubUsersComponent } from './components/github-users/github-users.component';
import { GithubUserDetailsComponent } from './components/github-user-details/github-user-details.component';

@NgModule({
  declarations: [AppComponent, UserDetailsComponent, GithubUsersComponent, GithubUserDetailsComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
