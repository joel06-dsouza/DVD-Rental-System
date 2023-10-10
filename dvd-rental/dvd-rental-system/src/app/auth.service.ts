import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}
  logout() {
    localStorage.removeItem('jwtToken'); // Remove the token from local storage
    localStorage.removeItem('StoreId');
    localStorage.removeItem('FullName');
    localStorage.removeItem('Email');
  }

  loggedIn() {
    return !!localStorage.getItem('jwtToken');
  }
}
