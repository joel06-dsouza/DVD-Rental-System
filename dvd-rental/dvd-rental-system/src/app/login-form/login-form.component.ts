import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DvdRentalService } from '../dvdrental.service'; 
import { AdminDvdRentalService } from '../admindvdrental.service'; 
import { FilmInfo } from '../FilmInfo.model'; 
import { Router } from '@angular/router';
import { LoginModel } from './login.model';
import * as crypto from 'crypto-js';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  token: string | undefined;
  loginModel: LoginModel;
  loginForm!: FormGroup;
  filmInfoList: FilmInfo[] = []; // Declare and initialize an empty array for film data
  loginFailed: boolean = false; //login failed

  constructor(private fb: FormBuilder, private dvdRentalService: DvdRentalService,private adminDvdRentalService: AdminDvdRentalService, 
    private route:Router, private authservice : AuthService) {
    this.loginModel = new LoginModel(new FormBuilder());
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginModel.loginForm && this.loginModel.loginForm.valid) {
      const username = this.loginModel.loginForm.get('username')!.value;
      const password = this.loginModel.loginForm.get('password')!.value;
      const enteredPasswordHash = crypto.SHA1(password).toString();
  
      const loginRequest = {
        username: username,
        password: enteredPasswordHash
      };
  
      // Attempt to login as an admin first
      this.authservice.loggedIn(username, enteredPasswordHash).subscribe(
        (Response : any) => {
          if(Response.token){
            console.log("Login success");
            console.log("Token: ",Response.token)
            console.log("Role: ", Response.role)
            console.log("Id: ", Response.staff_id)
            localStorage.setItem('token',Response.token)
            localStorage.setItem('role', Response.role)
            localStorage.setItem('StoreId', Response.staff_id)
            window.alert("Login success")
            
            if(Response.role == 'ROLE_STAFF'){
              this.route.navigate(['staff-display']);
            }
            if(Response.role == 'ROLE_ADMIN'){
              this.route.navigate(['admin-display']);
            }
            if(Response.role == 'ROLE_CUSTOMER'){
              this.route.navigate(['customer-display']);
            }
          }
        },
        (Error) => {
          window.alert("Check your Credentials. Try Again!")
          console.error("Login failed",Error)
        }
      );
    }
  }
  
}