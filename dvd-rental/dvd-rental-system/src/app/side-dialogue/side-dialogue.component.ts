import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { DialogService } from '../dialog.service';


@Component({
  selector: 'app-side-dialogue',
  templateUrl: './side-dialogue.component.html',
  styleUrls: ['./side-dialogue.component.css']
})
export class SideDialogueComponent {
  constructor(public dialogRef: MatDialogRef<SideDialogueComponent>, private authService: AuthService, private router: Router,private dialogService: DialogService) { }
  // GETTING ITEMS FROM LOCAL STORAGE
  name = localStorage.getItem('FullName');
  id = localStorage.getItem('StoreId');
  email = localStorage.getItem('Email');
  

  // CLOSE DIALOG BOX METHOD
  closeDialogue(): void {
    this.dialogRef.close();
  }

  logout() {
    // Open the progress dialog
    this.dialogService.openProgressDialog();
  
    // Simulate logout process (replace with your actual logout logic)
    // For demonstration, we'll use a setTimeout
    setTimeout(() => {
      // Calling the logout method from AuthService
      this.authService.logedOut();
  
      // Close the progress dialog when the logout is complete
      this.dialogService.closeProgressDialog();
  
      // Navigate to the login page
      this.router.navigate(['/login']);
      this.dialogRef.close('logout');
    }, 500); // Simulate 2 seconds for demonstration
  }
}