import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DvdRentalService } from '../dvdrental.service'; // Replace with the actual path
import { FilmInfo } from '../FilmInfo.model'; 
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

  constructor(private fb: FormBuilder, private dvdRentalService: DvdRentalService, private route:Router) {
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
  //     console.log(enteredPasswordHash);
      
      

  //     console.log('Sending login data:', { username, enteredPasswordHash });

  //     this.dvdRentalService.loginUser(username, enteredPasswordHash).subscribe(
  //       (response) => {
  //         alert("Login Successfull");
  //         console.log("Login Successful");
  //         console.log('Store ID:', response.storeId); 
  //         console.log('Full Name:', response.fullName);
      
          
  //         localStorage.setItem("StoreId", response.storeId);
  //         localStorage.setItem("Name",response.fullName)
  //         // After a successful login, fetch the film data
  //         this.route.navigate(['display']);
  //         this.fetchFilmData(response.storeId); // Pass the storeId to the fetchFilmData function
  //       },
  //       (error) => {
  //         // Handle errors here
  //         alert("Login Failed");
  //         console.log('Login failed:', error);
  //         console.error('Login failed:', error);
  //       }
  //     );
      
  //   }
  // }


  onSubmit() {
    if (this.loginForm && this.loginForm.valid) {
      const username = this.loginForm.get('username')!.value;
      const password = this.loginForm.get('password')!.value;
      const enteredPasswordHash = crypto.SHA1(password).toString();

      // Create a LoginRequest object with the username and hashed password
      const loginRequest = {
        username: username,
        password: enteredPasswordHash
      };

      // Send a POST request with the LoginRequest object in the request body
      this.dvdRentalService.loginUser(username, enteredPasswordHash).subscribe(
        (response) => {
          // Handle the response as before
          alert('Login Successful');
          console.log('Store ID:', response.storeId);
          console.log('JWT Token:', response.token);
          console.log('Full Name:', response.fullName);


          // Store the JWT token in local storage or a secure storage method

          this.token = JSON.stringify(response.token);
          localStorage.setItem('jwtToken', this.token);
          localStorage.setItem('StoreId', response.storeId);
          localStorage.setItem('FullName', response.fullName);

          // Redirect to a protected route or perform other actions
          this.route.navigate(['display']);
        },
        (error) => {
          // Handle login errors here
          alert('Login Failed');
          console.error('Login failed:', error);
        }
      );
    }
  }


  fetchFilmData(storeId: number) {
    // Call the film service method to fetch film data by store ID
    this.dvdRentalService.getAllFilmInfoByStoreId(storeId).subscribe(
      (data) => {
        console.log('Film Information:', data);
        // Assign the fetched data to the variable for display in the template
        this.filmInfoList = data;
      
      },
      (error) => {
        console.error('Error fetching film information:', error);
        // Handle errors here
      }
    );
  }
}