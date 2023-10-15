import { Component, OnInit } from '@angular/core';
import { CustomerDvdRentalService } from '../customerdvdrental.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { PaymentcustComponent } from '../paymentcust/paymentcust.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FilmcustomerComponent } from '../filmcustomer/filmcustomer.component';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css'],
})
export class CustomerDashboardComponent {
  showSideNav = false; // Initially, side navigation is hidden

  constructor(private dvdRentalService: CustomerDvdRentalService,private dialog: MatDialog) {}
 
  openPaymentDialog(): void {
    const dialogRef = this.dialog.open(PaymentcustComponent, {
      width: '600px',
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
      // Handle any data that you want to receive from the dialog here.
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

  openFilmCustomer() {
    const customerId = localStorage.getItem('cId');
    const id = parseInt(customerId, 10);
    
    if (!isNaN(id)) {
      this.dvdRentalService.getCustomerFilms(id).subscribe(
        (films) => {
          // Open the film dialog with the received films data
          const dialogRef = this.dialog.open(FilmcustomerComponent, {
            data: { customerFilms: films }, // Pass the films data to the dialog
            width: '800px', // Adjust the width as needed
          });
        },
        (error) => {
          console.error('Error fetching customer films:', error);
        }
      );
    }
  }
}
