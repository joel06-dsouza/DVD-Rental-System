import { Component } from '@angular/core';
import { PaymentcustComponent } from '../paymentcust/paymentcust.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent {

  constructor(private dialog: MatDialog){
    
  }
  openPaymentDialog(): void {
    const dialogRef = this.dialog.open(PaymentcustComponent, {
      width: '600px', // Set a suitable width
    });
  }
  openFilmCustomer(){
    
  }
}
