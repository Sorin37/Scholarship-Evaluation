import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Intern } from '../models/intern';

@Injectable({
  providedIn: 'root',
})
export class InternService {
  readonly baseUrl = 'https://localhost:5001';

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) {}

  getInterns(): Observable<Intern[]> {
    return this.httpClient.get<Intern[]>(
      this.baseUrl + '/Intern',
      this.httpOptions
    );
  }
  getIntern(id: string) {
    return this.httpClient.get<Intern>(
      this.baseUrl + '/Intern/' + id,
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
  deleteIntern(id: string) {
    return this.httpClient.delete(
      this.baseUrl + '/Intern/' + id,
      this.httpOptions
    );
  }
  updateIntern(intern: Intern) {
    return this.httpClient.put(
      this.baseUrl + '/Intern/' + intern.id,
      intern,
      this.httpOptions
    );
  }
  
  getMatchingInterns(searchString: string) {
    if (searchString !== undefined) {
      searchString = searchString.toLowerCase();
    }
    return this.getInterns().pipe(
      map((interns) =>
      interns.filter((intern) => intern.name.toLowerCase().includes(searchString))
      )
    );
  }
}
