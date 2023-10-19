import { Component, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-filmcustomer',
  templateUrl: './filmcustomer.component.html',
  styleUrls: ['./filmcustomer.component.css']
})
export class FilmcustomerComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator; 
  
  displayedColumns: string[] = [
    'filmId',
    'title',
    'description',
    'categoryName',
    'languageName',
    'length',
    'rating',
    'rentalDuration',
    'rentalRate',
    'releaseYear',
    'storeId',
    'customerId'
  ];
  
  dataSource: MatTableDataSource<any>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: string[]) {
    this.dataSource = new MatTableDataSource(data);
  }

  ngAfterViewInit() {
    // Assign the paginator to your data source
    this.dataSource.paginator = this.paginator;
  }

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
