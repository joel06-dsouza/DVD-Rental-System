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
  
  name = localStorage.getItem('FullName');
  id = localStorage.getItem('StoreId');
  email = localStorage.getItem('Email');
  


  closeDialogue(): void {
    this.dialogRef.close();
  }

  logout() {
    this.dialogService.openProgressDialog();
  
    setTimeout(() => {
      this.authService.logedOut();
  
      
      this.dialogService.closeProgressDialog();
  
      
      this.router.navigate(['/login']);
      this.dialogRef.close('logout');
    }, 2000); 
  }
}