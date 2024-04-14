import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

interface User {
  name: string;
  avatar_url: string;
  bio: string;
  location: string;
  public_repos: number;
  followers: number;
  following: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'GIT REPO FINDER';
  username: string = '';
  repositories: any[] = [];
  user: User = {
    name: '',
    avatar_url: '',
    bio: '',
    location: '',
    public_repos: 0,
    followers: 0,
    following: 0,
  };
  constructor(private apiService: ApiService) {}

  searchRepositories() {
    this.apiService.getUser(this.username).subscribe(
      (data: any) => {
        this.user = data;
        console.log(this.user);
        this.apiService.getRepos(this.username).subscribe(
          (data: any) => {
            this.repositories = data;
            console.log(this.repositories);
          },
          (error) => {
            console.error('Error fetching repositories:', error);
          }
        );
      },
      (error) => {
        console.error('Error fetching user:', error);
      }
    );
  }
  ngOnInit() {
    // this.apiService.getUser(this.username).subscribe(console.log);
  }
}
