import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaymentInfo } from './paymentinfo.model';
@Injectable({
  providedIn: 'root',
})
export class CustomerDvdRentalService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getCustomersByName(name: string): Observable<any> {
   
    const url = `${this.apiUrl}/Customer/login/${name}`;

   
    return this.http.get(url);
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
  

  CustomerAllfilms(category_name: string): Observable<any>{
    const requestBody= {category_name: category_name};
    return this.http.post(`${this.apiUrl}/Customer/filmByCategory`,requestBody);
  }
  

}
