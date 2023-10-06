import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}
  logout() {
    localStorage.removeItem('jwtToken'); // Remove the token from local storage
  }

  loggedIn() {
    return !!localStorage.getItem('jwtToken');
  }
}
