import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProgressDialogComponent } from './progress-dialog/progress-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  private dialogRef: MatDialogRef<ProgressDialogComponent>;

  constructor(private dialog: MatDialog) {}

  // Open the progress dialog
  openProgressDialog() {
    this.dialogRef = this.dialog.open(ProgressDialogComponent, {
      disableClose: true,
      panelClass: 'custom-dialog',
    });
  }

  // Close the progress dialog
  closeProgressDialog() {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
}