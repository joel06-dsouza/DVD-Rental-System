import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent {
  constructor(public dialogRef: MatDialogRef<StaffComponent>, private authService: AuthService, private router: Router) { }
  // GETTING ITEMS FROM LOCAL STORAGE
  name = localStorage.getItem('FullName');
  id = localStorage.getItem('StoreId');
  email = localStorage.getItem('Email');

  // CLOSE DIALOG BOX METHOD
  closeDialogue(): void {
    this.dialogRef.close();
  }

  // LOGOUT METHOD
  logout() {
    // Calling the logout method from AuthService
    this.authService.logedOut();
    this.router.navigate(['/login']);
    this.dialogRef.close('logout');
  }
}
