import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustSideDialogueComponent } from '../cust-side-dialogue/cust-side-dialogue.component';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-cust-header',
  templateUrl: './cust-header.component.html',
  styleUrls: ['./cust-header.component.css']
})
export class CustHeaderComponent implements OnInit {
  @ViewChild('sidenav') sidenav: SidenavComponent; // Reference to the app-sidenav component

  constructor(public dialog: MatDialog) {} // Inject MatDialog

  ngOnInit(): void {
  }

  toggleSidenav(): void {
    this.sidenav.toggleSidenav(); // Call the toggleSidenav method from the app-sidenav component
  }

  openProfileCard(): void {
    const dialogRef = this.dialog.open(CustSideDialogueComponent, {
      width: '350px' // Adjust the width as needed
    });
  }
}