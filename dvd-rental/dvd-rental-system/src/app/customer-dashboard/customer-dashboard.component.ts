import { Component, OnInit } from '@angular/core';
import { CustomerDvdRentalService } from '../customerdvdrental.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { PaymentcustComponent } from '../paymentcust/paymentcust.component';
import { MatTableDataSource } from '@angular/material/table';
import { FilmcustomerComponent } from '../filmcustomer/filmcustomer.component';
import { CustomerdetailsComponent } from '../customerdetails/customerdetails.component';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {
  private paymentSubscription: Subscription;
  filmData: string[] = [];
  dataSource = new MatTableDataSource<string>();
  constructor(private dvdRentalService: CustomerDvdRentalService,private dialog: MatDialog) {}
  customerId: number;
 
  openPaymentDialog(): void {
    const dialogRef = this.dialog.open(PaymentcustComponent, {
      width: '600px',
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
      // Handle any data that you want to receive from the dialog here.
    });
  }

  openFilmCustomer(){
    
  }
  ngOnInit(): void {
    // Call the Payment method when the component initializes
    const customerId = localStorage.getItem('cId');
    const id = parseInt(customerId, 10);
   // Assuming you have a customer ID
    // this.makePayment(id);
    this.showDetails(id);
    this.Film(id)
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

  // showDetails(customerId: number) {
  //   this.paymentSubscription = this.dvdRentalService.Details(customerId).subscribe({
  //     next: (response) => {
  //       // Handle the response as needed
  //       console.log("Successfully");
  //       console.log('Details response:', response);
  //     },
  //     error: (error) => {
  //       // Handle errors
  //       console.error('Details error:', error);
  //     }
  //   });
  // }
//  Film(customerId: number) {
//   this.paymentSubscription = this.dvdRentalService.Films(customerId).subscribe({
//     next: (response) => {
//       // Handle the response as needed
//       console.log("Successfully");
//       console.log('Films response:', response);
//     },
//     error: (error) => {
//       // Handle errors
//       console.error('Films error:', error);
//     }
//   });
// }
Film(customerId: number) {
  this.dvdRentalService.Films(customerId).subscribe({
    next: (response) => {
      console.log('Films response:', response);
      this.filmData = response;
      this.openFilmDialog();
    },
    error: (error) => {
      console.error('Films error:', error);
    }
  });
}

openFilmDialog() {
  const dialogRef = this.dialog.open(FilmcustomerComponent, {
    data: this.filmData,
  });

  dialogRef.afterClosed().subscribe(() => {
    // Handle dialog close events if needed
  });
}

showDetails(customerId: number) {
  this.dvdRentalService.Details(customerId).subscribe({
    next: (response) => {
      // Handle the response and pass it to the dialog
      this.openCustomerDetailsDialog(response);
    },
    error: (error) => {
      // Handle errors
      console.error('Details error:', error);
    }
  });
}

openCustomerDetailsDialog(customerDetails: any) {
  console.log('Customer Details:', customerDetails); // Add this line
  const dialogRef = this.dialog.open(CustomerdetailsComponent, {
    data: customerDetails
  });

  dialogRef.afterClosed().subscribe((result) => {
    // Handle any actions after the dialog is closed if needed
  });
}

  ngOnDestroy() {
    // Unsubscribe when the component is destroyed to prevent memory leaks
    if (this.paymentSubscription) {
      this.paymentSubscription.unsubscribe();
    }
  }
}
