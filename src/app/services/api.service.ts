import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getUser(
    githubUsername: string,
    page: number,
    perPage: number
  ): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('per_page', perPage.toString());

    return this.httpClient.get<any>(
      `https://api.github.com/users/${githubUsername}`,
      { params }
    );
  }

  getRepos(
    githubUsername: string,
    page: number,
    perPage: number
  ): Observable<any[]> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('per_page', perPage.toString());

    return this.httpClient.get<any[]>(
      `https://api.github.com/users/${githubUsername}/repos`,
      { params }
    );
  }

  getLanguages(url_language: string): Observable<any> {
    return this.httpClient.get<any>(url_language);
  }
}
