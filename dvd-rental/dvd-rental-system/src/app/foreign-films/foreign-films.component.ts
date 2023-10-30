import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerDvdRentalService } from '../customerdvdrental.service';

@Component({
  selector: 'app-foreign-films',
  templateUrl: './foreign-films.component.html',
  styleUrls: ['./foreign-films.component.css']
})
export class ForeignFilmsComponent {
  isAllForeignActive = true;
  isRentedForeignActive = false;

  allForeignColumns: string[] = ['title', 'description', 'release_year', 'language_name', 'rental_duration', 'rental_rate', 'length', 'rating'];
  rentedForeignColumns: string[] =  [
    'film_title', 'amount', 'payment_date', 'store_id', 'staff_id', 'payment_id','rental_id', 'rental_date', 'return_date', 'staff_name', 'category_name' ];

  displayedColumns: string[] = this.allForeignColumns;
  dataSource: MatTableDataSource<Film>;

  constructor(private customerDvdRentalService: CustomerDvdRentalService) {
    this.dataSource = new MatTableDataSource<Film>([
    ]);
  }

  ngOnInit() {
    this.fetchRented();
    this.fetchfilms(); 
  }
  
  showAllForeignFilms() {
    this.isAllForeignActive = true;
    this.isRentedForeignActive = false;
    this.displayedColumns = this.allForeignColumns;
    this.fetchfilms();
  }

  showRentedForeignFilms() {
    this.isAllForeignActive = false;
    this.isRentedForeignActive = true;
    this.displayedColumns = this.rentedForeignColumns;
    this.fetchRented();
  }

  id:string|undefined;
  customer_id: string;
  
 fetchRented(){
   this.id = localStorage.getItem('cId');
       console.log("customer id", this.id);
   
     console.log("Foreign component called");
     this.customerDvdRentalService.CustomerRentedFilms("Foreign",this.id).subscribe(
       (response: Film[])=> {
         console.log("Foreign Rented Films", response);
         this.dataSource.data = response;
       }
     )
   }

fetchfilms() {
  console.log("foreignfilms components called ");
  this.customerDvdRentalService.CustomerAllfilms("Foreign").subscribe(
    (response: Film[]) => {
      console.log("Foreign Films", response);
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