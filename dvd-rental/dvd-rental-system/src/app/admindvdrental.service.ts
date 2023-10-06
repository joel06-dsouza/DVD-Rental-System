import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}
