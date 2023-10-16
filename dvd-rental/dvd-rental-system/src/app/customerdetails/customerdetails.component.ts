import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    // `data` will contain the customer details passed from the dialog open function
  }
}
