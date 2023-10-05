import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-side-dialogue',
  templateUrl: './side-dialogue.component.html',
  styleUrls: ['./side-dialogue.component.css']
})
export class SideDialogueComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<SideDialogueComponent>
  ) {}

  // Function to close the dialogue
  closeDialogue() {
    this.dialogRef.close();
  }

  logout() {
    // Implement your logout logic here
    // For example, you can perform a logout action, clear user data, and navigate to the logout page
    console.log('Logout clicked');
    // Close the dialogue after handling logout
    this.dialogRef.close('logout'); // Pass 'logout' as the result to the afterClosed event
  }
}
