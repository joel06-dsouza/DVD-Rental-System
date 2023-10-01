import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FilmInfo } from '../FilmInfo.model'; 
import { DvdRentalService } from '../dvdrental.service';
import { Subscription, filter } from 'rxjs';


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

  constructor( private dvdRentalService: DvdRentalService) {
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
            console.log(`Film ID: ${data.id} does not match filter: ${value}`);
            break;
          }
        } else {
          const dataValue = data[key as keyof FilmInfo];
  
          if (!dataValue?.toString().includes(value)) {
            matchFound = false;
            console.log(`${key}: ${dataValue} does not match filter: ${value}`);
            break;
          }
        }
      }
    }
  
    console.log(`Match found: ${matchFound}`);
    return matchFound;
  }
  

  applyFilters() {
    // Apply the filter predicate to the data source
    this.dataSource.filterPredicate = this.filterPredicate;
    
    console.log(filter);
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
  
}
