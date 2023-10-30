import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerDvdRentalService } from '../customerdvdrental.service';

@Component({
  selector: 'app-sports-films',
  templateUrl: './sports-films.component.html',
  styleUrls: ['./sports-films.component.css']
})
export class SportsFilmsComponent {
  isAllSportsActive = true;
  isRentedSportsActive = false;

  allSportsColumns: string[] = ['title', 'description', 'release_year', 'language_name', 'rental_duration', 'rental_rate', 'length', 'rating'];
  rentedSportsColumns: string[] =  [
    'film_title', 'amount', 'payment_date', 'store_id', 'staff_id', 'payment_id','rental_id', 'rental_date', 'return_date', 'staff_name', 'category_name' ];
  displayedColumns: string[] = this.allSportsColumns;
  dataSource: MatTableDataSource<Film>;

  constructor(private customerDvdRentalService: CustomerDvdRentalService) {
    this.dataSource = new MatTableDataSource<Film>([

    ]);
  }

  ngOnInit() {
    this.fetchRented();
    this.fetchfilms(); 
  }
  showAllSportsFilms() {
    this.isAllSportsActive = true;
    this.isRentedSportsActive = false;
    this.displayedColumns = this.allSportsColumns;
    this.fetchfilms();
  }

  showRentedSportsFilms() {
    this.isAllSportsActive = false;
    this.isRentedSportsActive = true;
    this.displayedColumns = this.rentedSportsColumns;
    this.fetchRented();
  }

  id:string|undefined;
  customer_id: string;
  
 fetchRented(){
   this.id = localStorage.getItem('cId');
       console.log("customer id", this.id);
   
     console.log("Sports component called");
     this.customerDvdRentalService.CustomerRentedFilms("Sports",this.id).subscribe(
       (response: Film[])=> {
         console.log("Sports Rented Films", response);
         this.dataSource.data = response;
       }
     )
   }

fetchfilms() {
  console.log("sportsfilms components called");
  this.customerDvdRentalService.CustomerAllfilms("Sports").subscribe(
    (response: Film[]) => {
      console.log("Sports Films", response);
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