/* login.component.ts*/
import { NgModule, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import {Component} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule,CommonModule,
  MatButtonModule,MatIconModule,ReactiveFormsModule,
],
}
)

export class LoginComponent  implements OnInit{
  hide = true;
  loginForm: FormGroup; 

  constructor(private fb: FormBuilder) {

    this.loginForm = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
          Validators.pattern(/^[a-zA-Z0-9]+$/), // Alphanumeric characters only
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8), // Minimum password length
          Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]+$/), // At least one letter and one number
          Validators.maxLength(10),
        ],
      ],
    });
  }




  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, 
        Validators.minLength(3), 
        Validators.maxLength(10), 
        Validators.pattern(/^[a-zA-Z0-9]*$/)]],

      password: ['', [Validators.required, 
        Validators.minLength(8), 
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
        Validators.maxLength(10)]]
    });
  }

  // Function to toggle password visibility
  togglePasswordVisibility() {
    this.hide = !this.hide;
  }

  // Function to check if the submit button should be disabled
  isSubmitDisabled() {
    return this.loginForm.invalid;
  }


  // Getter functions for form controls
  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Form is valid, you can implement your submission logic here
      // For example, sending the form data to a server
      console.log('Form submitted with data:', this.loginForm.value);
    } else {
      // Form is invalid, handle validation errors or show a message
      console.log('Form is invalid. Please check the fields.');
    }
  }
}








