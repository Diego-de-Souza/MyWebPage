import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  
  
  constructor(private http: HttpClient) { }

  getRespoInfo(owner: string): Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `token ${environment.privateTokenGitHub}`
    })

    return this.http.get(`${environment.apiURLGithub}/users/${owner}/repos`);
  }

  getTESTE(): Observable<any>{
    return this.http.get('https://api.github.com/users/Diego-de-Souza/repos');
  }
}
