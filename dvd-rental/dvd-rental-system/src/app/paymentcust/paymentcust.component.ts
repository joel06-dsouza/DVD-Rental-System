// Import the necessary modules and services
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerDvdRentalService } from '../customerdvdrental.service';
import { PaymentInfo } from '../paymentinfo.model'; // Import the PaymentData model

@Component({
  selector: 'app-paymentcust',
  templateUrl: './paymentcust.component.html',
  styleUrls: ['./paymentcust.component.css']
})
export class PaymentcustComponent implements OnInit {
  displayedColumns: string[] = ['customer_id', 'payment_id', 'film_id', 'film_title', 'staff_id', 'staff_name', 'rental_id', 'rental_date', 'return_date', 'amount', 'payment_date', 'store_id', 'store_address'];
  dataSource = new MatTableDataSource<PaymentInfo>();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private customerDvdRentalService: CustomerDvdRentalService) {} // Update the service name

  // Fetch the data and update the table
  fetchData(customerId: number) {
    this.customerDvdRentalService.Payment(customerId).subscribe({
      next: (response: PaymentInfo[]) => {
        this.dataSource.data = response;
      },
      error: (error) => {
        console.error('Payment error:', error);
      }
    });
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    // Call fetchData with the customer ID you want to retrieve data for
    const customerId = localStorage.getItem('cId');
    const id = parseInt(customerId, 10);
    this.fetchData(id);
  }

  convertToExcel() {
    // Implement the logic to convert the data to Excel here.
    // You might need a library or service to handle this.
    // For example, you can use 'xlsx' library for Excel export.
  }
}
