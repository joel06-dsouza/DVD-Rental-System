import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-customer-details-dialog',
  templateUrl: './customer-details-dialog.component.html',
  styleUrls: ['./customer-details-dialog.component.css']
})
export class CustomerDetailsDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<CustomerDetailsDialogComponent>
  ) {}

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
