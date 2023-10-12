import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-progress-dialog',
  templateUrl: './progress-dialog.component.html',
  styleUrls: ['./progress-dialog.component.css'],
})
export class ProgressDialogComponent {

  constructor(public dialogRef: MatDialogRef<ProgressDialogComponent>) { }

  ngOnInit() { }

  // Method to close the dialog
  closeDialog() {
    this.dialogRef.close();
  }
}