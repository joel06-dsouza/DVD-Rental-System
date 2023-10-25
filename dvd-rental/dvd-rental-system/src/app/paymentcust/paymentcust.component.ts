import { Component,ElementRef, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-paymentcust',
  templateUrl: './paymentcust.component.html',
  styleUrls: ['./paymentcust.component.css']
})
export class PaymentcustComponent implements AfterViewInit {
  @ViewChild('table') table: ElementRef;
  displayedColumns: string[] = [
    'customer_id',
    'payment_id',
    'film_id',
    'film_title',
    'staff_id',
    'staff_name',
    'rental_id',
    'rental_date',
    'return_date',
    'amount',
    'payment_date',
    'store_id',
    'store_address'
  ];

  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.dataSource = new MatTableDataSource(data.content);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  // convertToExcel(): void {
  //   const currentPageIndex = this.paginator.pageIndex;
  //   const pageSize = this.paginator.pageSize;
  //   const startIndex = currentPageIndex * pageSize;
  //   const endIndex = startIndex + pageSize;
  
  //   const dataToExport = this.dataSource.data.slice(startIndex, endIndex);
  
  //   const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataToExport);
  //   const wb: XLSX.WorkBook = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  //   XLSX.writeFile(wb, 'table_data.xlsx');
  // }
  
  convertToExcel(): void {
    const currentPageIndex = this.paginator.pageIndex;
    const pageSize = this.paginator.pageSize;
    const startIndex = currentPageIndex * pageSize;
    const endIndex = startIndex + pageSize;
  
    const dataToExport = this.dataSource.data.slice(startIndex, endIndex);
  
    // Format date columns (e.g., rentalDate, returnDate, paymentDate) to the desired format
    dataToExport.forEach(row => {
      row.rentalDate = new Date(row.rentalDate).toLocaleString('en-US');
      row.returnDate = new Date(row.returnDate).toLocaleString('en-US');
      row.paymentDate = new Date(row.paymentDate).toLocaleString('en-US');
    });
  
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataToExport);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'table_data.xlsx');
  }
  
  
}