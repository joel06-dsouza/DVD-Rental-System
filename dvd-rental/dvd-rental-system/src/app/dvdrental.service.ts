import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FilmInfo } from './FilmInfo.model';
@Injectable({
  providedIn: 'root'
})

export class DvdRentalService {
  private apiUrl = 'http://localhost:8080'; // Update with your Express.js server URL

  constructor(private http: HttpClient) { }



  loginUser(username: string, password: string): Observable<any> {
    const requestBody = {
      username: username,
      password: password
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(`${this.apiUrl}/Staff/login`, requestBody, { headers: headers });
  }


  getAllFilmInfoByStoreId(storeId: number): Observable<FilmInfo[]> {
    const requestBody = {
      storeId: storeId
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<FilmInfo[]>(`${this.apiUrl}/Staff/filmByStoreId`, requestBody, { headers: headers });
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