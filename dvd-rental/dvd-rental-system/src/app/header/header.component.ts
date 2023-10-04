// import { Component } from '@angular/core';
import { NgModule, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SideDialogueComponent } from '../side-dialogue/side-dialogue.component';
import { Component, ViewChild, TemplateRef } from '@angular/core';



interface UserProfile {
  fullName: string;
  id: string;
  email: string;
  profilePhoto: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @ViewChild('dialogTemplate') dialogTemplate: TemplateRef<any>;

  profileBoxState = 'out';
  hide = true;
  loginForm: FormGroup;

  openProfileCard(): void {
    const dialogRef = this.dialog.open(SideDialogueComponent, {
      width: '350px', // Adjust the width as needed
      position: {
        top: '48px', // Adjust the top position to your liking
        right: '0px', // Adjust the right position to your liking
      },
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      // Handle the result if needed
    });
  }
  


  userProfile: UserProfile = {
    fullName: 'John Doe',
    id: '12345',
    email: 'example@email.com',
    profilePhoto: '' // Replace with the default photo path
  };

  user = {
    fullname: 'John Doe',
    id: '12345',
    email: 'example@email.com'
  };

  constructor(private fb: FormBuilder, public dialog: MatDialog) {

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

  signOut() {
    // Add your signout logic here
    console.log('Signed out');
    alert('signout successful ');
  }
}

