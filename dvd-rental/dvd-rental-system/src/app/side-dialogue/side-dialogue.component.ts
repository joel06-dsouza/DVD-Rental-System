import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-dialogue',
  templateUrl: './side-dialogue.component.html',
  styleUrls: ['./side-dialogue.component.css']
})
export class SideDialogueComponent {
  // private username:string|undefined;
  constructor(public dialogRef: MatDialogRef<SideDialogueComponent>,private authService:AuthService,private Router:Router) {}

  username = localStorage.getItem('FullName');
  id=localStorage.getItem('StoreId');
  email=localStorage.getItem('Email');

  closeDialogue(): void {
    this.dialogRef.close();
  }

  logout() {
    // Implement your logout logic here
    console.log('Logout clicked');
    this.dialogRef.close('logout');
    this.authService.logedOut();
     this.Router.navigate(['/login']); 
  }
}
