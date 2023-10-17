
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-paymentcust',
  templateUrl: './paymentcust.component.html',
  styleUrls: ['./paymentcust.component.css']
})
export class PaymentcustComponent {
  displayedColumns: string[] = ['customer_id', 'payment_id', 'film_id', 'film_title', 'staff_id', 'staff_name', 'rental_id', 'rental_date', 'return_date', 'amount', 'payment_date', 'store_id', 'store_address'];
  dataSource = new MatTableDataSource<PaymentData>(); // Replace 'PaymentData' with the actual data type.

  @ViewChild(MatPaginator) paginator: MatPaginator;

  // Replace this with your data service or API call to fetch the data.
  // This is just a placeholder.
  fetchData() {
    // Simulate fetching data from a service or API
    const mockData: PaymentData[] = [
      {
        customer_id: 1,
        payment_id: 101,
        film_id: 201,
        film_title: 'Film 1',
        staff_id: 301,
        staff_name: 'John Doe',
        rental_id: 401,
        rental_date: '2023-01-01',
        return_date: '2023-01-05',
        amount: 50.0,
        payment_date: '2023-01-06',
        store_id: 501,
        store_address: '123 Store St'
      },
      // Add more data objects here...
    ];

    this.dataSource.data = mockData;
  }

  ngOnInit() {
    this.fetchData();
    this.dataSource.paginator = this.paginator;
  }

  convertToExcel() {
    // Implement the logic to convert the data to Excel here.
    // You might need a library or service to handle this.
    // For example, you can use 'xlsx' library for Excel export.
  }
}

export interface PaymentData {
  customer_id: number;
  payment_id: number;
  film_id: number;
  film_title: string;
  staff_id: number;
  staff_name: string;
  rental_id: number;
  rental_date: string;
  return_date: string;
  amount: number;
  payment_date: string;
  store_id: number;
  store_address: string;
}


