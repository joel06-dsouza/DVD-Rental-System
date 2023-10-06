import {CanActivate,Route,Router} from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({providedIn:'root'})

export class AuthGuard{
    constructor(private router: Router) {}

    canActivate(): boolean {
        const token = localStorage.getItem('jwtToken');

        if (token) {
            return true; // User is authenticated
        } else {
            this.router.navigate(['/login']);
            return false; // User is not authenticated
        }
    }
}