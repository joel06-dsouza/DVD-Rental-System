import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import * as Papa from 'papaparse';
@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css'],
})
export class DatatableComponent implements AfterViewInit {
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

  @ViewChild(MatPaginator) paginator: MatPaginator; // Access the paginator element in your template

  constructor() {
    // Initialize the dataSource with dummy data
    this.dataSource = new MatTableDataSource([
      {
        filmid: 1,
        title: 'Harry Potter',
        description: 'Goblet of fire',
        releaseYear: 2007,
        language: 'English',
        rentalDuration: 3,
        rentalRate: 2.99,
        length: 120,
        rating: 'PG-13',
      },
      {
        filmid: 2,
        title: 'Avengers End Game',
        description: 'Iron Man Dies',
        releaseYear: 2018,
        language: 'English',
        rentalDuration: 2,
        rentalRate: 1.99,
        length: 95,
        rating: 'R'
      },
      {
        filmid: 3,
        title: 'KGF',
        description: 'Sanjay Dutt',
        releaseYear: 2021,
        language: 'Hindi',
        rentalDuration: 4,
        rentalRate: 4,
        length: 220,
        rating: 'R'
      },
      {
        filmid: 4,
        title: 'PawanKhind',
        description: 'Shivaji Maharaj',
        releaseYear: 2021,
        language: 'Marathi',
        rentalDuration: 3,
        rentalRate: 3.5,
        length: 200,
        rating: 'R'
      },
      {
        filmid: 5,
        title: 'Day Dreamer',
        description: 'Turkish Drama',
        releaseYear: 2021,
        language: 'Turkish',
        rentalDuration: 4,
        rentalRate: 5.5,
        length: 300,
        rating: 'R'
      },
      {
        filmid: 6,
        title: 'ABCD',
        description: 'Dance Movie',
        releaseYear: 2021,
        language: 'Hindi',
        rentalDuration: 4,
        rentalRate: 5.5,
        length: 300,
        rating: 'R'
      },
    ]);
  }

  ngAfterViewInit() {
    // Assign the paginator to your data source
    this.dataSource.paginator = this.paginator;
  }

  // Function to apply filters
  applyFilters() {
    // Convert search values to lowercase for case-insensitive search
    const searchFilmId = (this.searchValue.filmid || '').trim().toLowerCase();
    const searchTitle = (this.searchValue.title || '').trim().toLowerCase();
    const searchDescription = (this.searchValue.description || '').trim().toLowerCase();
    const searchReleaseYear = (this.searchValue.releaseYear || '').trim().toLowerCase();
    const searchLanguage = (this.searchValue.language || '').trim().toLowerCase();
    const searchRentalDuration = (this.searchValue.rentalDuwration || '').trim().toLowerCase();
    const searchRentalRate = (this.searchValue.rentalRate || '').trim().toLowerCase();
    const searchLength = (this.searchValue.length || '').trim().toLowerCase();
    const searchRating = (this.searchValue.rating || '').trim().toLowerCase();
  
    // Apply the combined filter value to the data source
    this.dataSource.filterPredicate = (data, filter) => {
      return (
        data.filmid.toString().toLowerCase().includes(searchFilmId) &&
        data.title.toLowerCase().includes(searchTitle) &&
        data.description.toLowerCase().includes(searchDescription) &&
        data.releaseYear.toString().toLowerCase().includes(searchReleaseYear) &&
        data.language.toLowerCase().includes(searchLanguage) &&
        data.rentalDuration.toString().toLowerCase().includes(searchRentalDuration) &&
        data.rentalRate.toString().toLowerCase().includes(searchRentalRate) &&
        data.length.toString().toLowerCase().includes(searchLength) &&
        data.rating.toLowerCase().includes(searchRating)
      );
    };
  
    this.dataSource.filter = 'filter'; // Apply the filter
  }

  exportToCSV() {
    const csvData = Papa.unparse(this.dataSource.data);
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'film-data.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  }
  
}
