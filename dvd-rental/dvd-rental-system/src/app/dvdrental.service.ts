
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FilmInfo } from './filminfo.model';

@Injectable({
  providedIn: 'root'
})
export class DvdRentalService {
  private apiUrl = 'http://localhost:8080'; // Update with your Express.js server URL

  constructor(private http: HttpClient) { }

  loginUser(username: string, password: string): Observable<any> {
    // Define the request body as an object
    const requestBody = {
      username: username,
      password: password
    };

    // Define headers (specify content type as JSON)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    // Make the POST request
    return this.http.post<any>(`${this.apiUrl}/staff/login`, requestBody, { headers: headers });
  }

  getAllFilmInfoByStoreId(storeId: number): Observable<FilmInfo[]> {
    const url = `${this.apiUrl}/Staff/filmByStoreId?storeId=${storeId}`;
    return this.http.get<FilmInfo[]>(url);
  }

  getActorsByFilmId(filmId: number): Observable<string[]> {
    const requestBody = {
      filmId: filmId
    };
  
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  
    return this.http.post<string[]>(`${this.apiUrl}/Staff/actors`, requestBody, { headers: headers });
  }
}
