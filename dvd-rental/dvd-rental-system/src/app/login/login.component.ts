import { Component, OnInit } from '@angular/core';
import { LoginModel } from './login.model'; // Import the LoginModel
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginModel: LoginModel; // Create an instance of LoginModel

  constructor() {
    this.loginModel = new LoginModel(new FormBuilder());
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.loginModel.loginForm.valid) {
      // Handle login logic here
      console.log('Logged in with:', this.loginModel.loginForm.value);
    }
  }
}
