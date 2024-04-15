import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

interface User {
  name: string;
  avatar_url: string;
  bio: string;
  location: string;
  html_url: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  username: string = '';
  user: User = {
    name: '',
    avatar_url: '',
    bio: '',
    location: '',
    html_url: '',
  };
  repositories: any[] = [];
  displayedRepositories: any[] = [];
  loading: boolean = false;
  pageSize: number = 10;
  currentPage: number = 1;
  totalPages: number = 1;

  constructor(private apiService: ApiService) {}

  ngOnInit() {}

  searchRepositories() {
    this.loading = true;
    this.apiService
      .getUser(this.username, this.currentPage, this.pageSize)
      .subscribe(
        (userData: any) => {
          this.user = userData;
          this.apiService
            .getRepos(this.username, this.currentPage, this.pageSize)
            .subscribe(
              (reposData: any[]) => {
                this.repositories = reposData;
                this.totalPages = Math.ceil(
                  this.repositories.length / this.pageSize
                );

                this.fetchLanguagesForRepositories();

                this.loading = false;
              },
              (error) => {
                console.error('Error fetching repositories:', error);
                this.loading = false;
              }
            );
        },
        (error) => {
          console.error('Error fetching user:', error);
          this.loading = false;
        }
      );
  }
  fetchLanguagesForRepositories() {
    this.repositories.forEach((repo) => {
      this.apiService.getLanguages(repo.languages_url).subscribe(
        (languagesData: any) => {
          repo.languages = Object.keys(languagesData); // Assuming the response contains an object with language names as keys
        },
        (error) => {
          console.error('Error fetching languages:', error);
        }
      );
    });
  }
}
