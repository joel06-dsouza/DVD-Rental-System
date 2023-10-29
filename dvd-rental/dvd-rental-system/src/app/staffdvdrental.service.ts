import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FilmInfo } from './FilmInfo.model';
import { ApiResponse } from './api-response';
import { FilmInfoPage } from './FilmInfo.page';
@Injectable({
  providedIn: 'root'
})

export class StaffDvdRentalService {
  private apiUrl = 'http://localhost:8080'; // Update with your Express.js server URL

  constructor(private http: HttpClient) { }



  loginStaff(username: string, password: string): Observable<any> {
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
  
  getPaginatedData(storeId: number= 1,  page: number = 1, size: number = 10): Observable<ApiResponse<FilmInfoPage>> {
    const requestBody = { storeId, page, size };
    const headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    return this.http.post<ApiResponse<FilmInfoPage>>(`${this.apiUrl}/Staff/filmByPagination`, requestBody, { headers });
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
