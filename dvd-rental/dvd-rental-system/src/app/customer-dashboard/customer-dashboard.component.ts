import { Component, OnInit } from '@angular/core';
import { CustomerDvdRentalService } from '../customerdvdrental.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { PaymentcustComponent } from '../paymentcust/paymentcust.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css'],
})
export class CustomerDashboardComponent {
  showSideNav = false; // Initially, side navigation is hidden

  constructor(private dvdRentalService: CustomerDvdRentalService, private dialog: MatDialog) { }

  openPaymentDialog(): void {
    // Retrieve payment details here
    const customerId = localStorage.getItem('cId');
    const id = parseInt(customerId, 10);
  
    this.dvdRentalService.Payment(id).subscribe(
      (paymentInfo) => {
        const dialogRef = this.dialog.open(PaymentcustComponent, {
          width: '100%',
          height: '550px',
          data: { title: 'Payment Details', content: paymentInfo }
        });
  
        dialogRef.afterOpened().subscribe(() => {
          dialogRef.componentInstance.dataSource = new MatTableDataSource(paymentInfo);
          dialogRef.componentInstance.dataSource.paginator = dialogRef.componentInstance.paginator; // This links the paginator to the data source
        });
  
        dialogRef.afterClosed().subscribe((result) => {
          console.log('The dialog was closed', result);
          // Handle any data that you want to receive from the dialog here.
        });
      },
      (error) => {
        console.error('Error fetching payment details:', error);
      });
  }
  



  ngOnInit(): void {
    // Call the Payment method when the component initializes
    const customerId = localStorage.getItem('cId');
    const id = parseInt(customerId, 10);
    //  Assuming you have a customer ID
    //   this.makePayment(id);
    //   this.showDetails(id);
    //   this.Film(id)
  }

  // makePayment(customerId: number) {
  //   this.paymentSubscription = this.dvdRentalService.Payment(customerId).subscribe({
  //     next: (response) => {
  //       // Handle the response as needed
  //       console.log("Successfully");
  //       console.log('Payment response:', response);
  //     },
  //     error: (error) => {
  //       // Handle errors
  //       console.error('Payment error:', error);
  //     }
  //   });
  // }

}