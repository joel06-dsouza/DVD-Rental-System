import { Component, OnInit } from '@angular/core';
import { CustomerDvdRentalService } from '../customerdvdrental.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {
  private paymentSubscription: Subscription;

  constructor(private dvdRentalService: CustomerDvdRentalService) {}

  ngOnInit(): void {
    // Call the Payment method when the component initializes
    const customerId = localStorage.getItem('cId');
    const id = parseInt(customerId, 10);
   // Assuming you have a customer ID
    this.makePayment(id);
    this.showDetails(id);
    this.Film(id)
  }

  makePayment(customerId: number) {
    this.paymentSubscription = this.dvdRentalService.Payment(customerId).subscribe({
      next: (response) => {
        // Handle the response as needed
        console.log("Successfully");
        console.log('Payment response:', response);
      },
      error: (error) => {
        // Handle errors
        console.error('Payment error:', error);
      }
    });
  }

  showDetails(customerId: number) {
    this.paymentSubscription = this.dvdRentalService.Details(customerId).subscribe({
      next: (response) => {
        // Handle the response as needed
        console.log("Successfully");
        console.log('Details response:', response);
      },
      error: (error) => {
        // Handle errors
        console.error('Details error:', error);
      }
    });
  }
 Film(customerId: number) {
  this.paymentSubscription = this.dvdRentalService.Films(customerId).subscribe({
    next: (response) => {
      // Handle the response as needed
      console.log("Successfully");
      console.log('Films response:', response);
    },
    error: (error) => {
      // Handle errors
      console.error('Films error:', error);
    }
  });
}

  ngOnDestroy() {
    // Unsubscribe when the component is destroyed to prevent memory leaks
    if (this.paymentSubscription) {
      this.paymentSubscription.unsubscribe();
    }
  }
}
