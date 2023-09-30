import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FilmInfo } from '../FilmInfo.model'; 
import { DvdRentalService } from '../dvdrental.service';
import { Subscription } from 'rxjs';


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

  // applyFilters() {
  //   // Convert search values to lowercase for case-insensitive search
  //   const searchFilmId = (this.searchValue.filmid || '').trim().toLowerCase();
  //   const searchTitle = (this.searchValue.title || '').trim().toLowerCase();
  //   const searchDescription = (this.searchValue.description || '').trim().toLowerCase();
  //   const searchReleaseYear = (this.searchValue.releaseYear || '').trim().toLowerCase();
  //   const searchLanguage = (this.searchValue.language || '').trim().toLowerCase();
  //   const searchRentalDuration = (this.searchValue.rentalDuration || '').trim().toLowerCase();
  //   const searchRentalRate = (this.searchValue.rentalRate || '').trim().toLowerCase();
  //   const searchLength = (this.searchValue.length || '').trim().toLowerCase();
  //   const searchRating = (this.searchValue.rating || '').trim().toLowerCase();

  //   // Apply the combined filter value to the data source
  //   this.dataSource.filterPredicate = (data, filter) => {
  //     return (
  //       data.filmid.toString().toLowerCase().includes(searchFilmId) &&
  //       data.title.toLowerCase().includes(searchTitle) &&
  //       data.description.toLowerCase().includes(searchDescription) &&
  //       data.releaseYear.toString().toLowerCase().includes(searchReleaseYear) &&
  //       data.language.toLowerCase().includes(searchLanguage) &&
  //       data.rentalDuration.toString().toLowerCase().includes(searchRentalDuration) &&
  //       data.rentalRate.toString().toLowerCase().includes(searchRentalRate) &&
  //       data.length.toString().toLowerCase().includes(searchLength) &&
  //       data.rating.toLowerCase().includes(searchRating)
  //     );
  //   };
  //   // Apply the filter
  //   this.dataSource.filter = JSON.stringify(searchFilmId + searchTitle + searchDescription);
  // }
  applyFilters() {
    // Convert search values to lowercase for case-insensitive search
    const searchFilmId = (this.searchValue.filmid || '').trim().toLowerCase();
    const searchTitle = (this.searchValue.title || '').trim().toLowerCase();
    const searchDescription = (this.searchValue.description || '').trim().toLowerCase();
    const searchReleaseYear = (this.searchValue.releaseYear || '').trim().toLowerCase();
    const searchLanguage = (this.searchValue.language || '').trim().toLowerCase();
    const searchRentalDuration = (this.searchValue.rentalDuration || '').trim().toLowerCase();
    const searchRentalRate = (this.searchValue.rentalRate || '').trim().toLowerCase();
    const searchLength = (this.searchValue.length || '').trim().toLowerCase();
    const searchRating = (this.searchValue.rating || '').trim().toLowerCase();
  
    console.log('searchFilmId:', searchFilmId);
  
    // Apply the combined filter value to the data source
    // Apply the filter values to the dataSource
    this.dataSource.filter = JSON.stringify({
      filmid: searchFilmId,
      title: searchTitle,
      description: searchDescription,
      releaseYear: searchReleaseYear,
      language: searchLanguage,
      rentalDuration: searchRentalDuration,
      rentalRate: searchRentalRate,
      length: searchLength,
      rating: searchRating,
    });
  }
  


  fetchFilmData(storeId: number) {
    // Unsubscribe from previous subscriptions to avoid memory leaks
    this.filmInfoSubscription.unsubscribe();

    // Call the film service method to fetch film data by store ID and subscribe with an observer
    this.filmInfoSubscription = this.dvdRentalService.getAllFilmInfoByStoreId(storeId).subscribe({
      next: (data) => {
        this.filmInfoList = data;
       console.log("From Display ");
        console.log(data);
         // Update the dataSource with the fetched data
        this.dataSource = new MatTableDataSource(this.filmInfoList);
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
