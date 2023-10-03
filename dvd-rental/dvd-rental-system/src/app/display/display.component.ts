import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FilmInfo } from '../FilmInfo.model'; 
import { DvdRentalService } from '../dvdrental.service';
import { Subscription, filter } from 'rxjs';
import { DialogueComponent } from '../dialogue/dialogue.component';
import { MatDialog } from '@angular/material/dialog';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  filmInfoList: FilmInfo[] = [];
  StoreID:any|undefined;
  private filmInfoSubscription: Subscription;
  displayedColumns: string[] = [
    'filmid',
    'title',
    'description',
    'releaseYear',
    'language',
    'rentalDuration',
    'rentalRate',
    'length',
    'rating',
    'action',
  ];
  dataSource: MatTableDataSource<any>;
  public searchValue: any = {};

  @ViewChild(MatPaginator) paginator!: MatPaginator; // Access the paginator element in your template

  constructor( private dvdRentalService: DvdRentalService,private dialog: MatDialog) {
    this.filmInfoSubscription = new Subscription();
    // Initialize the dataSource with dummy data
    this.dataSource = new MatTableDataSource<any>([]);
  }

  

  ngAfterViewInit() {
    // Assign the paginator to your data source
    this.StoreID=localStorage.getItem('StoreId')
    this.fetchFilmData(this.StoreID);
    this.dataSource.paginator = this.paginator;
   
  }

  
  filterPredicate(data: FilmInfo, filter: string): boolean {
    const filterObject = JSON.parse(filter);
    let matchFound = true;

    for (const key in filterObject) {
      if (filterObject.hasOwnProperty(key)) {
        const value = filterObject[key];

        if (key === 'id') {
          if (data.id !== Number(value)) {
            matchFound = false;
            break;
          }
        } else {
          const dataValue = data[key as keyof FilmInfo];

          if (!dataValue?.toString().includes(value)) {
            matchFound = false;
            break;
          }
        }
      }
    }

    return matchFound;
  }

  applyFilters() {
    // Apply the filter predicate to the data source
    this.dataSource.filterPredicate = this.filterPredicate;

    // Apply the filter
    this.dataSource.filter = JSON.stringify({
        id: this.searchValue.id,
        title: this.searchValue.title,
        description: this.searchValue.description,
        releaseYear: this.searchValue.releaseYear,
        language: this.searchValue.language,
        rentalDuration: this.searchValue.rentalDuration,
        rentalRate: this.searchValue.rentalRate,
        length: this.searchValue.length,
        rating: this.searchValue.rating,
    });

    // Check if all filter values are empty
    const isAllFiltersEmpty = Object.values(this.searchValue).every(value => value === undefined || value === '');

    if (isAllFiltersEmpty) {
        // If all filters are empty, clear the filter
        this.dataSource.filter = '';
    }
}





  fetchFilmData(storeId: number) {
  // Unsubscribe from previous subscriptions to avoid memory leaks
  this.filmInfoSubscription.unsubscribe();

  // Call the film service method to fetch film data by store ID and subscribe with an observer
  this.filmInfoSubscription = this.dvdRentalService.getAllFilmInfoByStoreId(storeId).subscribe({
    next: (data) => {
      this.filmInfoList = data;

      // Update the dataSource with the fetched data
      this.dataSource = new MatTableDataSource(this.filmInfoList);

      // Set the paginator after updating the data source
      this.dataSource.paginator = this.paginator;
    },
    error: (error) => {
      console.error('Error fetching film information:', error);
      // Handle errors here
    }
  });
}


  ngOnDestroy() {
    // Unsubscribe from the filmInfoSubscription when the component is destroyed
    this.filmInfoSubscription.unsubscribe();
  }

  openActorListDialog(filmId: number) {
    const dialogRef = this.dialog.open(DialogueComponent, {
      width: '400px', // Adjust the width as needed
      data: { filmId: filmId }, // Pass the film ID to the dialog
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle any actions after the dialog is closed
      console.log('The dialog was closed', result);
    });
  }


  convertToExcel(): void {
    const table = document.getElementById('dataTable');
  
    if (!table) {
      console.error('Table with id "dataTable" not found.');
      return;
    }
  
    // Create an empty worksheet
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet([[]]);
  
    const columnNames: any[] = [];
  
    // Iterate through the table header cells to extract the column names
    table.querySelectorAll('th[data-column-name]').forEach((headerCell, index) => {
      const columnName = headerCell.getAttribute('data-column-name');
      if (columnName !== 'Actor') {
        columnNames.push(columnName);
      }
    });
  
    // Add column names as a single row to the worksheet
    XLSX.utils.sheet_add_aoa(ws, [columnNames], { origin: 'A1' });
  
    // Iterate through the table data rows to extract the data
    const dataRows: any[][] = [];
    table.querySelectorAll('tbody tr').forEach((row) => {
      const rowData: string[] = [];
      // Iterate through the data cells in the row
      row.querySelectorAll('td').forEach((cell, cellIndex) => {
        if (columnNames[cellIndex]) {
          rowData.push(cell.innerText.trim()); // Use innerText to handle empty cells
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
