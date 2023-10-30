import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaymentInfo } from './paymentinfo.model';
import { RentedFilm } from './RentedFilm.model';
@Injectable({
  providedIn: 'root',
})
export class CustomerDvdRentalService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getCustomersByName(username: string, password: string): Observable<any> {
    const requestBody = {
        username: username,
        password: password
    };

    const headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    return this.http.post<any>(`${this.apiUrl}/Customer/login`, requestBody, { headers: headers });
  }

  Payment(customerId:number): Observable<PaymentInfo[]>  {
    console.log(customerId)
    const requestBody = {
      customer_id:customerId
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<PaymentInfo[]>(`${this.apiUrl}/Customer/Payments`, requestBody, { headers: headers });

  }

  Details(customerId:number): Observable<string[]>  {
    console.log(customerId)
    const requestBody = {
      customerId:customerId
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<string[]>(`${this.apiUrl}/Customer/customerdetails`, requestBody, { headers: headers });

  }

  Films(customerId:number): Observable<string[]>  {
    console.log(customerId)
    const requestBody = {
      customer_id:customerId
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<string[]>(`${this.apiUrl}/Customer/Films`, requestBody, { headers: headers });

  }

  CustomerAllfilms(category: string): Observable<any>{
    console.log(category)
    const requestBody= {category_name: category};
    return this.http.post(`${this.apiUrl}/Customer/filmbyCategory`,requestBody);
  }

  CustomerRentedFilms(category_name: string, customer_id: string): Observable<any>{
    const requestBody= {category_name: category_name, customer_id: customer_id};
    return this.http.post(`${this.apiUrl}/Customer/RentedFilms`, requestBody);
  }

  getRentedFilmsForLoggedInCustomer(): Observable<RentedFilm[]> {
    const customerId = +localStorage.getItem('Id'); 

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<RentedFilm[]>(`${this.apiUrl}/rented-films/customer/${customerId}`, { headers });
  }

}
