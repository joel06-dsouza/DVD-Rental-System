import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminDvdRentalService {
  private apiUrl = 'http://localhost:8080'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  loginAdmin(username: string, password: string): Observable<any> {
    const requestBody = { username, password };
    return this.http.post(`${this.apiUrl}/admin/login`, requestBody);
  }

   AdminStore(storeId: string): Observable<any> {
    const requestBody = { storeId:storeId };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  
    return this.http.post(`${this.apiUrl}/admin/stores`, requestBody);
  }

  AdminStoreDetail(staffId:string):Observable<any>{
    const requestBody = { staffId:staffId };
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json'
    // });
    return this.http.post(`${this.apiUrl}/admin/staffdetails`, requestBody);
  }

  getPaginatedData(page: string, size: string): Observable<any> {
    const requestBody = { page, size };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(`${this.apiUrl}/api/pagination`, requestBody, { headers });
  }

  AdminFilm(storeId: string): Observable<any> {
    const requestBody = { storeId };
  
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  
    return this.http.post(`${this.apiUrl}/admin/filmByStoreId`, requestBody, { headers });
  }
  
}
