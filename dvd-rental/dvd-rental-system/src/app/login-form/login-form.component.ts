import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { StaffDvdRentalService } from '../staffdvdrental.service';
import { AdminDvdRentalService } from '../admindvdrental.service';
import { CustomerDvdRentalService } from '../customerdvdrental.service';
import { FilmInfo } from '../filminfo.model';
import { Router } from '@angular/router';
import { LoginModel } from './login.model';
import * as crypto from 'crypto-js';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortable } from '@angular/material/sort';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  token: string | undefined;
  loginModel: LoginModel;
  loginForm!: FormGroup;
  filmInfoList: FilmInfo[] = [];
  loginFailed: boolean = false;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private authservice: AuthService,
    private adminDvdRentalService: AdminDvdRentalService,
    private staffDvdRentalService: StaffDvdRentalService,
    private customerDvdRentalService: CustomerDvdRentalService
  ) {
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

      this.authservice.loggedIn(username, enteredPasswordHash).subscribe(
        (Response: any) => {
          if (Response.token) {
            localStorage.setItem('token', Response.token);
            localStorage.setItem('role', Response.role);

            if (Response.role === 'ROLE_ADMIN') {
              this.handleAdminLogin(username, enteredPasswordHash);
            } else if (Response.role === 'ROLE_STAFF') {
              this.handleStaffLogin(username, enteredPasswordHash);
            } else if (Response.role === 'ROLE_CUSTOMER') {
              this.handleCustomerLogin(username, enteredPasswordHash);
            }
          }
        },
        (Error) => {
          window.alert("Check your Credentials. Try Again!");
          console.error("Login failed", Error);
        }
      );
    }
  }

  private handleAdminLogin(username: string, passwordHash: string) {
    this.adminDvdRentalService.loginAdmin(username, passwordHash).subscribe(
      (adminResponse: any) => {
        localStorage.setItem('aName', adminResponse.adminFullName);
        localStorage.setItem('aId', adminResponse.adminId);
        alert('Admin Login Successful');
        this.route.navigate(['admin-display']);
      },
      (adminError) => {
        alert("Error in Admin Login");
        localStorage.clear();
        console.error("Admin login failed", adminError);
      }
    );
  }

  private handleStaffLogin(username: string, passwordHash: string) {
    this.staffDvdRentalService.loginStaff(username, passwordHash).subscribe(
      (staffresponse: any) => {
        localStorage.setItem('StoreId', staffresponse.storeId);
        localStorage.setItem('FullName', staffresponse.fullName);
        localStorage.setItem('Email', staffresponse.email);
        alert('Staff Login Successful');
        this.route.navigate(['staff-display']);
      },
      (staffError) => {
        alert("Error in Staff Login");
        localStorage.clear();
        console.error("Staff login failed", staffError);
      }
    );
  }

  private handleCustomerLogin(username: string, passwordHash: string ) {
    this.customerDvdRentalService.getCustomersByName(username, passwordHash).subscribe(
      (customerResponse: any) => {
        localStorage.setItem('cId', customerResponse.id);
        localStorage.setItem('cName', customerResponse.name);
        alert('Customer Login Successful');
        this.route.navigate(['customer-display']);
      },
      (customerError) => {
        alert('Error in Customer Login');
        localStorage.clear();
        console.error('Customer login failed', customerError);
      }
    );
  }
}