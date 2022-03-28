import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Intern } from '../models/intern';

@Injectable({
  providedIn: 'root'
})
export class InternService {
  readonly baseUrl = 'https://localhost:5001';
  
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) { }

  getInterns(): Observable<Intern[]> {
    return this.httpClient.get<Intern[]>(
      this.baseUrl + '/Intern',
      this.httpOptions
    );
  }
  addIntern(intern: Intern) {
    return this.httpClient.post(
      this.baseUrl + '/Intern',
      intern,
      this.httpOptions
    );
  }
}
