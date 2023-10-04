import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SideDialogueComponent } from '../side-dialogue/side-dialogue.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // Output event to trigger the side dialogue
  @Output() openSideDialogue = new EventEmitter<void>();

  constructor(public dialog: MatDialog) {} // Inject MatBottomSheet
  ngOnInit(): void {
  }
  openProfileCard(): void {
    const dialogRef = this.dialog.open(SideDialogueComponent, {
      width: '350px' // Adjust the width as needed
    });
  }
}
