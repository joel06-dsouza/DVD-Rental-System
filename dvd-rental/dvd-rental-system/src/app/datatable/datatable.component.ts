import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FilmInfo } from '../filminfo.model';
import { DvdRentalService } from '../dvdrental.service';
import { Subscription, filter } from 'rxjs';
import * as XLSX from 'xlsx';
import { ChangeDetectorRef } from '@angular/core';
import { DialogueComponent } from '../dialogue/dialogue.component';
import { MatDialog } from '@angular/material/dialog';
import { SideDialogueComponent } from '../side-dialogue/side-dialogue.component';


@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent {
  filmInfoList: FilmInfo[] = [];
  StoreID: any | undefined;
  private filmInfoSubscription: Subscription;
  actors: string[] = [];
  private actorsSubscription: Subscription | undefined;
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

  filmIdFilter: string = '';
  titleFilter: string = '';
  descriptionFilter: string = '';
  releaseYearFilter: string = '';
  languageFilter: string = '';
  rentalDurationFilter: string = '';
  rentalRateFilter: string = '';
  lengthFilter: string = '';
  ratingFilter: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator; // Access the paginator element in your template

  constructor(private dvdRentalService: DvdRentalService, private cdr: ChangeDetectorRef,private dialog: MatDialog) {
    this.filmInfoSubscription = new Subscription();
    // Initialize the dataSource with dummy data
    this.dataSource = new MatTableDataSource<any>([]);
  }

  ngAfterViewInit() {
    // Assign the paginator to your data source
    this.StoreID = localStorage.getItem('StoreId')
    this.fetchFilmData(this.StoreID);
    this.dataSource.paginator = this.paginator;

    console.log('filmInfoList:', this.filmInfoList);
  }

  applyFilters() {
    const filteredData = this.filmInfoList.filter((film) =>
      film.film_id.toString().includes(this.filmIdFilter) &&
      film.title.toLowerCase().includes(this.titleFilter.toLowerCase()) &&
      film.description.toLowerCase().includes(this.descriptionFilter.toLowerCase()) &&
      film.release_year.toString().includes(this.releaseYearFilter) &&
      film.language_name.toLowerCase().includes(this.languageFilter.toLowerCase()) &&
      film.rental_duration.toString().includes(this.rentalDurationFilter) &&
      film.rental_rate.toString().includes(this.rentalRateFilter) &&
      film.length.toString().includes(this.lengthFilter) &&
      film.rating.toLowerCase().includes(this.ratingFilter.toLowerCase())
    );

    // Update the data source with the filtered data
    this.dataSource.data = filteredData;
  }
  resetFilters() {
    this.filmIdFilter = '';
    this.titleFilter = '';
    this.descriptionFilter = '';
    this.releaseYearFilter = '';
    this.languageFilter = '';
    this.rentalDurationFilter = '';
    this.rentalRateFilter = '';
    this.lengthFilter = '';
    this.ratingFilter = '';

    // Reset the data source to the original data
    this.dataSource.data = this.filmInfoList;
  }


  fetchFilmData(storeId: number) {
    // Unsubscribe from previous subscriptions to avoid memory leaks
    this.filmInfoSubscription.unsubscribe();

    // Call the film service method to fetch film data by store ID and subscribe with an observer
    this.filmInfoSubscription = this.dvdRentalService.getAllFilmInfoByStoreId(storeId).subscribe({
      next: (data) => {
        // Map the data to match the interface
        this.filmInfoList = data.map((item: any) => ({
          film_id: item.id,
          title: item.title,
          description: item.description,
          category_name: item.categoryName,
          language_name: item.languageName,
          length: item.length,
          rating: item.rating,
          rental_duration: item.rentalDuration,
          rental_rate: item.rentalRate,
          release_year: item.releaseYear,
          store_id: item.storeId,
        }));

        // Log the mapped data to verify
        console.log('Mapped Film Info Data:', this.filmInfoList);

        // Update the dataSource with the mapped data
        this.dataSource = new MatTableDataSource(this.filmInfoList);

        // Set the paginator after updating the data source
        this.dataSource.paginator = this.paginator;

        // Trigger change detection
        this.cdr.detectChanges();
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

  convertToExcel(): void {
    const table = document.getElementById('dataTable');

    // Create an empty worksheet
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet([[]]);

    const columnNames = []; // Array to store column names

    // Iterate through the table header cells to extract the column names
    table.querySelectorAll('th[data-column-name]').forEach((headerCell, index) => {
      // Get the column name from the data attribute
      const columnName = headerCell.getAttribute('data-column-name');
      if (columnName !== 'Actor') {
        // Exclude the "Actor" column
        columnNames.push(columnName);
      }
    });

    // Add column names as a single row to the worksheet
    XLSX.utils.sheet_add_aoa(ws, [columnNames], { origin: 'A1' });

    // Iterate through the table data rows to extract the data
    const dataRows = [];
    table.querySelectorAll('tbody tr').forEach((row) => {
      const rowData = [];
      // Iterate through the data cells in the row
      row.querySelectorAll('td').forEach((cell, cellIndex) => {
        // Only include data for non-"Actor" columns
        if (columnNames[cellIndex]) {
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


  fetchActors(id: number) {
    console.log(`Actors with ID: ${id}`);
      
    if (this.actorsSubscription) { // Check if actorsSubscription is defined
      this.actorsSubscription.unsubscribe();
    } else {
      console.error('actorsSubscription is undefined');
    }
  
    const filmIdToFetch = id;
  
    this.actorsSubscription = this.dvdRentalService.getActorsByFilmId(filmIdToFetch).subscribe({
      next: (actors) => {
        this.actors = actors;
        // No more alert here
      },
      error: (error) => {
        console.error('Error fetching actors:', error);
      }
    });
  }

  openActorListDialog(filmId: number) {
    this.fetchActors(filmId);
  
    const dialogRef = this.dialog.open(DialogueComponent, {
      width: '400px',
      data: { title: 'Actors List', actors: this.actors }, // Pass the title and actors here
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
  }
  
  
  
  openActorDialog(actors: any) {
    // Open the dialog and pass actors data
    this.dialog.open(DialogueComponent, {
      data: {
        title: 'Actors List',
        actors: actors // Pass the actors' data here
      }
    });
  
  
  }
  
  openSideDialogue() {
    // Open the side dialogue component
    const dialogRef = this.dialog.open(SideDialogueComponent, {
      width: '300px', // Adjust the width as needed
      data: {
        // Pass user details here
        username: 'John Doe', // Replace with the actual username
        storeId: '12345' // Replace with the actual store ID
      }
    });
  
    // Subscribe to the afterClosed event to perform actions after the dialogue is closed
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'logout') {
        // Implement your logout logic here
        console.log('Logout clicked');
        // Call your logout function or navigate to the logout page
      }
    });
  }

  

}