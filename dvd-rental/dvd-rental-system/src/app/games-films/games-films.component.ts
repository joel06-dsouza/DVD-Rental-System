import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerDvdRentalService } from '../customerdvdrental.service';

@Component({
  selector: 'app-games-films',
  templateUrl: './games-films.component.html',
  styleUrls: ['./games-films.component.css']
})
export class GamesFilmsComponent {
  isAllGamesActive = true;
  isRentedGamesActive = false;


  allGamesColumns: string[] = ['title', 'description', 'release_year', 'language_name', 'rental_duration', 'rental_rate', 'length', 'rating'];
  rentedGamesColumns: string[] =  [
    'film_title', 'amount', 'payment_date', 'store_id', 'staff_id', 'payment_id','rental_id', 'rental_date', 'return_date', 'staff_name', 'category_name' ];

  displayedColumns: string[] = this.allGamesColumns;
  dataSource: MatTableDataSource<Film>;

  constructor(private customerDvdRentalService: CustomerDvdRentalService) {
    this.dataSource = new MatTableDataSource<Film>([

    ]);
    
  }
  ngOnInit() {
    this.fetchRented();
    this.fetchfilms(); 
  }

  showAllGamesFilms() {
    this.isAllGamesActive = true;
    this.isRentedGamesActive = false;
    this.displayedColumns = this.allGamesColumns;
    this.fetchfilms();
  }

  showRentedGamesFilms() {
    this.isAllGamesActive = false;
    this.isRentedGamesActive = true;
    this.displayedColumns = this.rentedGamesColumns;
    this.fetchRented();
  }

  id:string|undefined;
  customer_id: string;
  
 fetchRented(){
   this.id = localStorage.getItem('cId');
       console.log("customer id", this.id);
   
     console.log("Games component called");
     this.customerDvdRentalService.CustomerRentedFilms("Games",this.id).subscribe(
       (response: Film[])=> {
         console.log("Games Rented Films", response);
         this.dataSource.data = response;
       }
     )
   }

  fetchfilms() {
    console.log("Games components called ");
    this.customerDvdRentalService.CustomerAllfilms("Games").subscribe(
      (response: Film[]) => {
        console.log("Games Movies", response);
        this.dataSource.data = response;
      }
    );
  }
}

export interface Film {
  title: string;
  description: string;
  releaseYear: number;
  language: string;
  rentalDuration: number;
  rentalRate: number;
  length: number;
  rating: number;
}