import { Component, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatBottomSheet } from '@angular/material/bottom-sheet';


@Component({
  selector: 'app-side-dialogue',
  templateUrl: './side-dialogue.component.html',
  styleUrls: ['./side-dialogue.component.css']
})
export class SideDialogueComponent {
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private bottomSheetRef: MatBottomSheetRef<SideDialogueComponent>,
    private bottomSheet: MatBottomSheet // Add MatBottomSheet here
  ) { }

  // Function to close the bottom sheet
  closeDialogue() {
    this.bottomSheetRef.dismiss();
  }

  logout() {
    console.log('Logout clicked');
    this.bottomSheetRef.dismiss('logout'); // Pass 'logout' as the result to the afterDismissed event
  }
}
