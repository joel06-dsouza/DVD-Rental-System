// customer-dashboard.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css'],
})
export class CustomerDashboardComponent {
  showSideNav = false; // Initially, side navigation is hidden

  toggleSideNav() {
    this.showSideNav = !this.showSideNav; // Toggle the side navigation
  }

  openPaymentDialog() {
    // Logic to open the Payment Details dialog
  }

  openFilmDialog() {
    // Logic to open the Film Details dialog
  }
}
