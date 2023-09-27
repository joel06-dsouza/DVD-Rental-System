// src/app/datatable/datatable.component.ts
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent {

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Convert to lowercase
  
    this.dataSource.filter = filterValue;
  }
  displayedColumns: string[] = [
    'filmId',
    'title',
    'description',
    'releaseYear',
    'languageId',
    'rentalDuration',
    'rentalRate',
    'length',
    'rating',
    'actor'
  ];

  films = [
    {
      filmId: 1,
      title: 'Film 1',
      description: 'Description for Film 1',
      releaseYear: 2022,
      languageId: 1,
      rentalDuration: 5,
      rentalRate: 2.99,
      length: 120,
      rating: 'PG',
      actor: 'Actor 1 Details'
    },
    {
      filmId: 2,
      title: 'Film 2',
      description: 'Description for Film 1',
      releaseYear: 2022,
      languageId: 1,
      rentalDuration: 5,
      rentalRate: 2.99,
      length: 120,
      rating: 'PG',
      actor: 'Actor 1 Details'
    },
    {
      filmId: 3,
      title: 'Film 3',
      description: 'Description for Film 1',
      releaseYear: 2023,
      languageId: 1,
      rentalDuration: 5,
      rentalRate: 2.99,
      length: 120,
      rating: 'PG',
      actor: 'Actor 1 Details'
    },
    {
      filmId: 4,
      title: 'Film 4',
      description: 'Description for Film 1',
      releaseYear: 2023,
      languageId: 1,
      rentalDuration: 5,
      rentalRate: 2.99,
      length: 120,
      rating: 'PG',
      actor: 'Actor 1 Details'
    },
    // ... Add more film data
  ];

  dataSource = new MatTableDataSource(this.films);

  actorDetails: string | null = null;

  showActorDetails(actor: string) {
    this.actorDetails = actor;
  }

  hideActorDetails() {
    this.actorDetails = null;
  }
}