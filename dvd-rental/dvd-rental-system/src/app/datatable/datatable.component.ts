import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent {
  dataSource: MatTableDataSource<any>;
  columns = ['filmId', 'title', 'description', 'releaseYear', 'language', 'rentalDuration', 'rentalRate', 'length', 'rating', 'actor'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // Sample film data
  films: any[] = [
    {
      filmId: 1,
      title: 'Film 1',
      description: 'Description for Film 1',
      releaseYear: 2021,
      language: 'English',
      rentalDuration: 7,
      rentalRate: 2.99,
      length: 120,
      rating: 'PG-13',
      actor: 'Actor 1'
    },
    {
      filmId: 2,
      title: 'Film 2',
      description: 'Description for Film 2',
      releaseYear: 2020,
      language: 'Hindi',
      rentalDuration: 9,
      rentalRate: 3.99,
      length: 129,
      rating: 'R',
      actor: 'Actor 2'
    },
    {
      filmId: 3,
      title: 'Film 3',
      description: 'Description for Film 3',
      releaseYear: 2022,
      language: 'English',
      rentalDuration: 4,
      rentalRate: 5.99,
      length: 134,
      rating: 'PG-13',
      actor: 'Actor 3'
    },
    {
      filmId: 4,
      title: 'Film 4',
      description: 'Description for Film 4',
      releaseYear: 2019,
      language: 'Marathi',
      rentalDuration: 4,
      rentalRate: 6.99,
      length: 111,
      rating: 'PG-13',
      actor: 'Actor 4'
    }
    // Add more film objects here...
  ];

  filmIdFilter: string = ''; // Used for the Film Id filter
  isFilterEnabled: boolean = true; // Initial state is enabled

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.films);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.applyFilter(); // Apply filter initially
  }

  enableFilter() {
    this.isFilterEnabled = true;
    this.applyFilter();
  }

  applyFilter() {
    
    this.dataSource.filterPredicate = (data, filter) => {
      const filmId = data.filmId.toString().toLowerCase();
      return filmId.includes(filter);
    };
  
    this.dataSource.filter = this.filmIdFilter.trim().toLowerCase();
  }
  
}
