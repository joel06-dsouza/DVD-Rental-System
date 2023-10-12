import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DvdRentalService } from '../dvdrental.service'; 
import { AdminDvdRentalService } from '../admindvdrental.service'; 
import { FilmInfo } from '../filminfo.model'; 
import { Router } from '@angular/router';
import { LoginModel } from './login.model';
import * as crypto from 'crypto-js';
import { JwtToken } from '../jwt-token.model';
import { CustomerDvdRentalService } from '../customerdvdrental.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  token: string|undefined;
  loginModel: LoginModel; 
  loginForm!: FormGroup;
  filmInfoList: FilmInfo[] = []; // Declare and initialize an empty array for film data
  loginFailed: boolean = false; //login failed

  constructor(private fb: FormBuilder, private dvdRentalService: DvdRentalService,private adminDvdRentalService: AdminDvdRentalService, private customerDvdRentalService: CustomerDvdRentalService, private route:Router) {
    this.loginModel = new LoginModel(new FormBuilder());
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }



 




  onSubmit() {
    if (this.loginForm && this.loginForm.valid) {
      const username = this.loginForm.get('username')!.value;
      const password = this.loginForm.get('password')!.value;
      const enteredPasswordHash = crypto.SHA1(password).toString();
  
      const loginRequest = {
        username: username,
        password: enteredPasswordHash
      };
  
      // Attempt to login as an admin first
      this.adminDvdRentalService.loginAdmin(username, enteredPasswordHash).subscribe(
        (adminResponse) => {
          // Handle admin login success
          
          //roll 
          console.log("Admin Respone  ",adminResponse)
          console.log("Admin Id",adminResponse.adminId)
          console.log("Admin Name",adminResponse.adminFullName)
          localStorage.setItem('aName',adminResponse.adminFullName)
          localStorage.setItem('aId',adminResponse.adminId)
          localStorage.setItem('ajwtToken',adminResponse.jwtToken)
          alert('Admin Login Successful');
          this.route.navigate(['admin-display'])

        },
        (adminError) => {
          
          this.dvdRentalService.loginUser(username, enteredPasswordHash).subscribe(
            (staffresponse) => {
              // Handle the response as before
              alert('Login Successful');
              console.log('Store ID:', staffresponse.storeId);
              console.log('JWT Token:', staffresponse.jwtToken);
              console.log('Full Name:', staffresponse.fullName);
              console.log('Email:', staffresponse.email);
              localStorage.setItem('jwtToken', JSON.stringify(staffresponse.jwtToken));
              localStorage.setItem('StoreId', staffresponse.storeId);
              localStorage.setItem('FullName', staffresponse.fullName);
              localStorage.setItem('Email',staffresponse.email)
    
            
              this.route.navigate(['staff-display']);
            },
            (satfferror) => {
              console.log(password);
              const enteredPasswordHash = crypto.SHA1(password).toString();
              if (enteredPasswordHash === "8cb2237d0679ca88db6464eac60da96345513964") {
                console.log("Password match, proceeding to customer login");
                this.customerDvdRentalService.getCustomersByName(username).subscribe(
                  (customers) => {
                    this.route.navigate(['customer-display']);
                    console.log("Successfully logged in as a customer");
                    console.log('Customers:', customers);
                    console.log('Customer ID:', customers[0].id);
                    
                     localStorage.setItem('cId',customers[0].id)
                  },
                  (error) => {
                    // Handle the error when customer login fails
                    alert("Error in Customer Login");
                    console.error('Error in Customer Login:', error);
                  }
                );
              } else {
                // Handle the case where the password doesn't match
                alert("Invalid Password");
                console.error("Invalid Password");
              }
            }
            
              // alert('Login Failed');
              // console.error('Login failed:', error);
              
            
          );
        }
      );
    }
  }

  
  
}