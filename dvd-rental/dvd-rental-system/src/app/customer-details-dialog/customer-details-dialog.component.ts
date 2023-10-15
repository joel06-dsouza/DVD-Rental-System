// customer-details-dialog.component.ts
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-customer-details-dialog',
  templateUrl: './customer-details-dialog.component.html',
})
export class CustomerDetailsDialogComponent {
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}

