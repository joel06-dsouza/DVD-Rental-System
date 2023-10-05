import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FilmInfo } from '../filminfo.model';
import { DvdRentalService } from '../dvdrental.service';
import { Subscription, filter } from 'rxjs';
import * as XLSX from 'xlsx';
import { MatDialog } from '@angular/material/dialog';
import { DialogueComponent } from '../dialogue/dialogue.component';
import { HeaderComponent } from '../header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { SideDialogueComponent } from '../side-dialogue/side-dialogue.component';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {

  
  filmInfoList: FilmInfo[] = [];
  StoreID: any | undefined;
  private filmInfoSubscription: Subscription;
  actors: string[] = [];
  private actorsSubscription: Subscription | undefined; // Initialize it as undefined
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

  constructor(private dvdRentalService: DvdRentalService,private dialog: MatDialog) {
    this.filmInfoSubscription = new Subscription();
    this.actorsSubscription = new Subscription();
    this.dataSource = new MatTableDataSource<any>([]);
  }

  ngAfterViewInit() {
    // Assign the paginator to your data source
    this.StoreID = localStorage.getItem('StoreId')
    this.fetchFilmData(this.StoreID);
    this.dataSource.paginator = this.paginator;
  }

  filterPredicate(data: FilmInfo, filter: string): boolean {
    const filterObject = JSON.parse(filter);
    let matchFound = true;

    for (const key in filterObject) {
      if (filterObject.hasOwnProperty(key)) {
        const value = filterObject[key];

        if (key === 'film_id') {
          if (data.film_id !== Number(value)) {
            matchFound = false;
            break;
          }
        } else {
          const dataValue = data[key as keyof FilmInfo];

          if (!dataValue || !dataValue.toString().toLowerCase().includes(value.toLowerCase())) {
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
  
  

  
  ngOnDestroy() {
    // Unsubscribe from the filmInfoSubscription when the component is destroyed
    this.filmInfoSubscription.unsubscribe();
  }



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
