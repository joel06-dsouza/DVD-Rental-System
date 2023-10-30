import {ActivatedRouteSnapshot, CanActivate,Route,Router} from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({providedIn:'root'})

export class AuthGuard implements CanActivate{
    constructor(private router:Router){ }
    canActivate(route: ActivatedRouteSnapshot): boolean {
        const token = localStorage.getItem('token');
        const userRole = localStorage.getItem('role');
        const requiredRole = route.data['role'];
    
        if (token && userRole && userRole === requiredRole) {
          // User is authenticated and has the required role
          return true;
        } else {
          // User is not authenticated or doesn't have the required role, redirect to login page
          this.router.navigate(['Unauthorize']);
          return false;
        }
      }
}      