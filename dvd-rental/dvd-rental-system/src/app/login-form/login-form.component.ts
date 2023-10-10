import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DvdRentalService } from '../dvdrental.service';
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
  token: string | undefined;
  loginModel: LoginModel;
  loginForm!: FormGroup;
  filmInfoList: FilmInfo[] = [];
  loginFailed: boolean = false; //login failed


  constructor(private fb: FormBuilder, private dvdRentalService: DvdRentalService, private route: Router) {
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

      // Create a LoginRequest object with the username and hashed password
      const loginRequest = {
        username: username,
        password: enteredPasswordHash
      };

      // Send a POST request with the LoginRequest object in the request body
      this.dvdRentalService.loginUser(username, enteredPasswordHash).subscribe(
        (response) => {
          alert('Login Successful');
          console.log('Store ID:', response.storeId);
          console.log('JWT Token:', response.jwtToken);
          console.log('Full Name:', response.fullName);
          console.log('Email:', response.email);

          // Reset loginFailed to false on successful login
          this.loginFailed = false;


          // Store the JWT token in local storage
          localStorage.setItem('jwtToken', JSON.stringify(response.jwtToken));
          localStorage.setItem('StoreId', response.storeId);
          localStorage.setItem('FullName', response.fullName);
          localStorage.setItem('Email', response.email);

          // Redirect to a protected route
          this.route.navigate(['display']);
        },
        (error) => {
          console.error('Login failed:', error);

          // Set loginFailed to true on failed login
          this.loginFailed = true;
        }
      );
    }
  }


  fetchFilmData(storeId: number) {
    // Call the getAllFilmInfoByStoreId method to fetch film data by store ID
    this.dvdRentalService.getAllFilmInfoByStoreId(storeId).subscribe(
      (data) => {
        console.log('Film Information:', data);
        // Assign the fetched data to the variable for display in the template
        this.filmInfoList = data;

      },
      (error) => {
        console.error('Error fetching film information:', error);
      }
    );
  }
}
