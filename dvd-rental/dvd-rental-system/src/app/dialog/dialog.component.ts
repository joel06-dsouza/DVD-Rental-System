import { Component } from '@angular/core';
import { OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogComponent>
  ) { }

  ngOnInit(): void {
  }

  // Function to close the diaog
  closeDialog(): void {
    this.dialogRef.close();
  }

}
