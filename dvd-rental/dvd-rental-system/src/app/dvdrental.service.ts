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




  // loginUser(username: string, password: string): Observable<any> {
  //     return this.http.get<any>(`${this.apiUrl}/staff/login?username=${username}&password=${password}`);
  //   }

  loginUser(username: string, password: string): Observable<any> {
    const requestBody = {
      username: username,
      password: password
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(`${this.apiUrl}/staff/login`, requestBody, { headers: headers });
  }




  // getAllFilmInfoByStoreId(storeId: number): Observable<FilmInfo[]> {
  //   const url = `${this.apiUrl}/Staff/filmByStoreId?storeId=${storeId}`;
  //   return this.http.get<FilmInfo[]>(url);
  // }
  getAllFilmInfoByStoreId(storeId: number): Observable<FilmInfo[]> {
    const requestBody = {
      storeId: storeId
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<FilmInfo[]>(`${this.apiUrl}/Staff/filmByStoreId`, requestBody, { headers: headers });
  }

  // getActorsByFilmId(filmId: number): Observable<string[]> {
  //   const url = `${this.apiUrl}/Staff/actors?filmId=${filmId}`;
  //   return this.http.get<string[]>(url);
  // }
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