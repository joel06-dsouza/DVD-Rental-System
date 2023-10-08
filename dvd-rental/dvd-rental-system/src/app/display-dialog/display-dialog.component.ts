import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-display-dialog',
  templateUrl: './display-dialog.component.html',
  styleUrls: ['./display-dialog.component.css']
})
export class DisplayDialogComponent {
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
