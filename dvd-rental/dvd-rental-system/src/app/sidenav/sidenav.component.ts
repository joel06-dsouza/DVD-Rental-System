/* sidenav.component.ts*/
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
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { trigger,state,style,animate,transition } from '@angular/animations';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  standalone: true,

  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      state('out', style({
        transform: 'translateX(100%)',
        opacity: 0
      })),
      transition('in => out', animate('300ms ease-out')),
      transition('out => in', animate('300ms ease-in'))
    ])
  
  ]
,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule,CommonModule,
  MatButtonModule,MatIconModule,ReactiveFormsModule,MatCardModule,FormsModule,
  MatToolbarModule
],

})

export class SidenavComponent  implements OnInit{
  profileBoxState = 'out';
  hide = true;
  loginForm: FormGroup; 


  toggleProfileBox() {
    this.profileBoxState = this.profileBoxState === 'in' ? 'out' : 'in';
  }


  userProfile: UserProfile = {
    fullName: 'John Doe',
    id: '12345',
    email: 'example@email.com',
    profilePhoto: 'C:/Users/user/Pictures/Screenshots/mind.png' // Replace with the default photo path
  };

  user={
    fullname:'John Doe',
    id:'12345',
    email:'example@email.com'
   };

  constructor(private fb: FormBuilder) {

    this.loginForm = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          /* Validators.minLength(3),
          Validators.maxLength(10),
          Validators.pattern(/^[a-zA-Z0-9]+$/), // Alphanumeric characters only
         */],
      ],
      password: [
        '',
        [
          Validators.required,
          /* Validators.minLength(8), // Minimum password length
          Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]+$/), // At least one letter and one number
          Validators.maxLength(10), */
        ],
      ],
    });
  }

  selectedProfilePhoto: string = '';

  // Function to handle profile photo upload
  onProfilePhotoChange(event: any) {
    const file = event.target.files[0];

    if (file) {
        // Read the selected file and set it as the source for the img element
        const reader = new FileReader();
        reader.onload = (e: any) => {
            this.selectedProfilePhoto = e.target.result;
        };
        reader.readAsDataURL(file);
    }
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


  signOut() {
    // Add your signout logic here
    console.log('Signed out');
    alert('signout successful ');
  }



  

}

interface UserProfile {
  fullName: string;
  id: string;
  email: string;
  profilePhoto: string; // Path to the user's profile photo

  
}






