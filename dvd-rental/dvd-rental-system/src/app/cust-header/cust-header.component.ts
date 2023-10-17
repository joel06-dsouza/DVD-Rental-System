
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustSideDialogueComponent } from '../cust-side-dialogue/cust-side-dialogue.component';

@Component({
  selector: 'app-cust-header',
  templateUrl: './cust-header.component.html',
  styleUrls: ['./cust-header.component.css']
})
export class CustHeaderComponent implements OnInit {
   

  constructor(public dialog: MatDialog ) {} // Inject MatDialog

  
  toggleSidenav() {
    console.log('Toggling sidenav');
  
  }
  
  ngOnInit(): void {
  }

 

  openProfileCard(): void {
    const dialogRef = this.dialog.open(CustSideDialogueComponent, {
      width: '350px' // Adjust the width as needed
    });
  }
}