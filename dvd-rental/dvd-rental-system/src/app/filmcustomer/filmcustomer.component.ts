import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-filmcustomer',
  templateUrl: './filmcustomer.component.html',
  styleUrls: ['./filmcustomer.component.css']
})
export class FilmcustomerComponent {


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
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: string[]) {}

  // dataSource: MatTableDataSource<any>;

  // ngAfterViewInit() {
  //   // Assign the paginator to your data source
  
  //   this.dataSource.paginator = this.paginator;
  // }
  convertToExcel(): void {
    const table = document.getElementById('dataTable');
  
    // Create an empty worksheet
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet([[]]);
  
    const columnNames: string[] = []; // Specify the type as string[]
  
    // Iterate through the table header cells to extract the column names
    table?.querySelectorAll('th[data-column-name]').forEach((headerCell, index) => {
      // Get the column name from the data attribute
      const columnName = headerCell.getAttribute('data-column-name');
      if (columnName !== 'Actor') {
        // Exclude the "Actor" column
        columnNames.push(columnName as string); // Cast to string
      }
    });
  
    // Add column names as a single row to the worksheet
    XLSX.utils.sheet_add_aoa(ws, [columnNames], { origin: 'A1' });
  
    // Iterate through the table data rows to extract the data
    const dataRows: string[][] = []; // Specify the type as string[][]
    table?.querySelectorAll('tbody tr').forEach((row) => {
      const rowData: string[] = [];
      // Iterate through the data cells in the row
      row.querySelectorAll('td').forEach((cell, cellIndex) => {
        // Only include data for non-"Actor" columns and check for null
        if (columnNames[cellIndex] && cell.textContent) {
          rowData.push(cell.textContent.trim());
        }
      });
      dataRows.push(rowData);
    });
  
    // Add data rows below the column names in the worksheet
    XLSX.utils.sheet_add_aoa(ws, dataRows, { origin: 'A2' });
  
    // Create a workbook and add the worksheet
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  
    // Save the workbook as an Excel file
    XLSX.writeFile(wb, 'table_data.xlsx');
  }
}
