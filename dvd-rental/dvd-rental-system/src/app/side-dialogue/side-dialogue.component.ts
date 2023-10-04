import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-side-dialogue',
  templateUrl: './side-dialogue.component.html',
  styleUrls: ['./side-dialogue.component.css']
})
export class SideDialogueComponent {
  constructor(public dialogRef: MatDialogRef<SideDialogueComponent>) {}

  closeDialogue(): void {
    this.dialogRef.close();
  }

  logout() {
    // Implement your logout logic here
    console.log('Logout clicked');
    this.dialogRef.close('logout'); // Pass 'logout' as the result to the afterDismissed event
  }
}
