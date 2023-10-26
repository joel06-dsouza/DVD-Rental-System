import { Component, OnInit } from '@angular/core';
import { CustomerDvdRentalService } from '../customerdvdrental.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { PaymentcustComponent } from '../paymentcust/paymentcust.component';
import { FilmcustomerComponent } from '../filmcustomer/filmcustomer.component';
import { CustomerdetailsComponent } from '../customerdetails/customerdetails.component';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {
  filmData: string[] = [];
  dataSource = new MatTableDataSource<string>();
  customerId: number;

  constructor(private dvdRentalService: CustomerDvdRentalService, private dialog: MatDialog) {}

  ngOnInit(): void {
    // You can fetch the customerId in the ngOnInit method
    const customerId = localStorage.getItem('cId');
    this.customerId = parseInt(customerId, 10);
  }

  openPaymentDialog(): void {
    const customerId = localStorage.getItem('cId');
    const id = parseInt(customerId, 10);

    this.dvdRentalService.Payment(id).subscribe((paymentInfo) => {
      const dialogRef = this.dialog.open(PaymentcustComponent, {
        width: '100%',
        height: '550px',
        data: { title: 'Payment Details', content: paymentInfo }
      });
    });
  }

  openFilmDialog(): void {
    this.dvdRentalService.Films(this.customerId).subscribe((response) => {
      console.log('Films response:', response);
      this.filmData = response;
      const dialogRef = this.dialog.open(FilmcustomerComponent, {
        data: this.filmData,
      
      });

      dialogRef.afterClosed().subscribe(() => {
        // Handle dialog close events if needed
      });
    });
  }

  showDetails(): void {
    this.dvdRentalService.Details(this.customerId).subscribe((response) => {
      // Handle the response and pass it to the dialog
      this.openCustomerDetailsDialog(response);
    });
  }

  openCustomerDetailsDialog(customerDetails: any) {
    const dialogRef = this.dialog.open(CustomerdetailsComponent, {
      data: customerDetails
    });

    dialogRef.afterClosed().subscribe(() => {
      // Handle any actions after the dialog is closed if needed
    });
  }
}