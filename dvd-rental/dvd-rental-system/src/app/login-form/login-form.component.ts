import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DvdRentalService } from '../dvdrental.service'; 
import { AdminDvdRentalService } from '../admindvdrental.service'; 
import { FilmInfo } from '../filminfo.model'; 
import { Router } from '@angular/router';
import { LoginModel } from './login.model';
import * as crypto from 'crypto-js';
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

  constructor(private fb: FormBuilder, private dvdRentalService: DvdRentalService,private adminDvdRentalService: AdminDvdRentalService, private route:Router) {
    this.loginModel = new LoginModel(new FormBuilder());
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }



  // onSubmit() {
  //   if (this.loginForm && this.loginForm.valid) {
  //     const username = this.loginForm.get('username')!.value;
  //     const password = this.loginForm.get('password')!.value;
  //     const enteredPasswordHash = crypto.SHA1(password).toString();


  //     const loginRequest = {
  //       username: username,
  //       password: enteredPasswordHash
  //     };

  //     // Send a POST request with the LoginRequest object in the request body
  //     this.dvdRentalService.loginUser(username, enteredPasswordHash).subscribe(
  //       (response) => {
  //         // Handle the response as before
  //         alert('Login Successful');
  //         console.log('Store ID:', response.storeId);
  //         console.log('JWT Token:', response.jwtToken);
  //         console.log('Full Name:', response.fullName);


  //         // Store the JWT token in local storage or a secure storage method

  //         localStorage.setItem('jwtToken', JSON.stringify(response.jwtToken));
  //         localStorage.setItem('StoreId', response.storeId);
  //         localStorage.setItem('FullName', response.fullName);

  //         // Redirect to a protected route or perform other actions
  //         this.route.navigate(['display']);
  //       },
  //       (error) => {
  //         // Handle login errors here
  //         alert('Login Failed');
  //         console.error('Login failed:', error);
  //       }
  //     );
  //   }
  // }


  // fetchFilmData(storeId: number) {
  //   // Call the film service method to fetch film data by store ID
  //   this.dvdRentalService.getAllFilmInfoByStoreId(storeId).subscribe(
  //     (data) => {
  //       console.log('Film Information:', data);
  //       // Assign the fetched data to the variable for display in the template
  //       this.filmInfoList = data;
      
  //     },
  //     (error) => {
  //       console.error('Error fetching film information:', error);
  //       // Handle errors here
  //     }
  //   );
  // }


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
          alert('Admin Login Successful');
          this.route.navigate(['admin-display'])
          // console.log('Store ID:', adminResponse.storeId);
          // console.log('JWT Token:', adminResponse.jwtToken);
          // console.log('Full Name:', adminResponse.fullName);
  
          // // Store the JWT token in local storage or a secure storage method
          // localStorage.setItem('jwtToken', JSON.stringify(adminResponse.jwtToken));
          // localStorage.setItem('StoreId', adminResponse.storeId);
          // localStorage.setItem('FullName', adminResponse.fullName);
  
          // Redirect to a protected route or perform other actions
          // this.route.navigate(['display']);
        },
        (adminError) => {
          
          this.dvdRentalService.loginUser(username, enteredPasswordHash).subscribe(
            (response) => {
              // Handle the response as before
              alert('Login Successful');
              console.log('Store ID:', response.storeId);
              console.log('JWT Token:', response.jwtToken);
              console.log('Full Name:', response.fullName);
              console.log('Email:', response.email);
    
    
            
    
              localStorage.setItem('jwtToken', JSON.stringify(response.jwtToken));
              localStorage.setItem('StoreId', response.storeId);
              localStorage.setItem('FullName', response.fullName);
              localStorage.setItem('Email',response.email)
    
            
              this.route.navigate(['staff-display']);
            },
            (error) => {
              
              alert('Login Failed');
              console.error('Login failed:', error);
            }
          );
        }
      );
    }
  }
  
}
