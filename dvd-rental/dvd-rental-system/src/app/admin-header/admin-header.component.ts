import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminSideDialogueComponent } from '../admin-side-dialogue/admin-side-dialogue.component';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  // Output event to trigger the side dialogue
  @Output() openSideDialogue = new EventEmitter<void>(); 

  constructor(public dialog: MatDialog) {} // Inject MatBottomSheet
  ngOnInit(): void {
  }
  openProfileCard(): void {
    const dialogRef = this.dialog.open(AdminSideDialogueComponent, {
      width: '350px' // Adjust the width as needed
    });
  }
}
