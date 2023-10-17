import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-filmcustomer',
  templateUrl: './filmcustomer.component.html',
  styleUrls: ['./filmcustomer.component.css']
})
export class FilmcustomerComponent {
  displayedColumns: string[] = [
    'store_id',
    'film_id',
    'rental_duration',
    'rental_rate',
    'release_year',
    'customer_id',
    'length',
    'rating',
    'title',
    'description',
    'category_name',
    'language_name'
  ];

  dataSource = new MatTableDataSource<FilmDetail>([
    // Replace this with your actual film data
    { store_id: 1, film_id: 101, rental_duration: 7, rental_rate: 2.99, release_year: 2005, customer_id: 1, length: 120, rating: 'PG-13', title: 'Movie Title 1', description: 'This is a movie description.', category_name: 'Action', language_name: 'English' },
    { store_id: 2, film_id: 102, rental_duration: 5, rental_rate: 3.99, release_year: 2007, customer_id: 2, length: 130, rating: 'R', title: 'Movie Title 2', description: 'Another movie description.', category_name: 'Drama', language_name: 'Spanish' }
  ]);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface FilmDetail {
  store_id: number;
  film_id: number;
  rental_duration: number;
  rental_rate: number;
  release_year: number;
  customer_id: number;
  length: number;
  rating: string;
  title: string;
  description: string;
  category_name: string;
  language_name: string;
}

