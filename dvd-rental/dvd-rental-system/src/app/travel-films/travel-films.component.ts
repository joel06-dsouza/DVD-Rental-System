import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerDvdRentalService } from '../customerdvdrental.service';

@Component({
  selector: 'app-travel-films',
  templateUrl: './travel-films.component.html',
  styleUrls: ['./travel-films.component.css']
})
export class TravelFilmsComponent {
  isAllTravelActive = true;
  isRentedTravelActive = false;

  allTravelColumns: string[] = ['title', 'description', 'release_year', 'language_name', 'rental_duration', 'rental_rate', 'length', 'rating'];
  rentedTravelColumns: string[] =  [
    'film_title', 'amount', 'payment_date', 'store_id', 'staff_id', 'payment_id','rental_id', 'rental_date', 'return_date', 'staff_name', 'category_name' ];

  displayedColumns: string[] = this.allTravelColumns;
  dataSource: MatTableDataSource<Film>;

  constructor(private customerDvdRentalService: CustomerDvdRentalService) {
    this.dataSource = new MatTableDataSource<Film>([
 
    ]);
  }

  ngOnInit() {
    this.fetchRented();
    this.fetchfilms(); 
  }

  showAllTravelFilms() {
    this.isAllTravelActive = true;
    this.isRentedTravelActive = false;
    this.displayedColumns = this.allTravelColumns;
    this.fetchfilms();
  }

  showRentedTravelFilms() {
    this.isAllTravelActive = false;
    this.isRentedTravelActive = true;
    this.displayedColumns = this.rentedTravelColumns;
    this.fetchRented();
  }

fetchfilms() {
  console.log("travelfilms components called ");
  this.customerDvdRentalService.CustomerAllfilms("Travel").subscribe(
    (response: Film[]) => {
      console.log("Travel Films", response);
      this.dataSource.data = response;
    }
  );
}

id:string|undefined;
  customer_id: string;
  
 fetchRented(){
   this.id = localStorage.getItem('cId');
       console.log("customer id", this.id);
   
     console.log("Travel component called");
     this.customerDvdRentalService.CustomerRentedFilms("Travel",this.id).subscribe(
       (response: Film[])=> {
         console.log("Travel Rented Films", response);
         this.dataSource.data = response;
       }
     )
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