import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerDvdRentalService } from '../customerdvdrental.service';

@Component({
  selector: 'app-new-films',
  templateUrl: './new-films.component.html',
  styleUrls: ['./new-films.component.css']
})
export class NewFilmsComponent {
  isAllNewActive = true;
  isRentedNewActive = false;

  allNewColumns: string[] = ['title', 'description', 'release_year', 'language_name', 'rental_duration', 'rental_rate', 'length', 'rating'];
  rentedNewColumns: string[] =  [
    'film_title', 'amount', 'payment_date', 'store_id', 'staff_id', 'payment_id','rental_id', 'rental_date', 'return_date', 'staff_name', 'category_name' ];

  displayedColumns: string[] = this.allNewColumns;
  dataSource: MatTableDataSource<Film>;

  constructor(private customerDvdRentalService: CustomerDvdRentalService) {
    this.dataSource = new MatTableDataSource<Film>([

    ]);
  }

  ngOnInit() {
    this.fetchRented();
    this.fetchfilms(); 
  }

  showAllNewFilms() {
    this.isAllNewActive = true;
    this.isRentedNewActive = false;
    this.displayedColumns = this.allNewColumns;
    this.fetchfilms();
  }

  showRentedNewFilms() {
    this.isAllNewActive = false;
    this.isRentedNewActive = true;
    this.displayedColumns = this.rentedNewColumns;
    this.fetchRented();
  }


  id:string|undefined;
  customer_id: string;
  
 fetchRented(){
   this.id = localStorage.getItem('cId');
       console.log("customer id", this.id);
   
     console.log("New component called");
     this.customerDvdRentalService.CustomerRentedFilms("New",this.id).subscribe(
       (response: Film[])=> {
         console.log("New Rented Films", response);
         this.dataSource.data = response;
       }
     )
   }
   
fetchfilms() {
  console.log("newfilms components called  ");
  this.customerDvdRentalService.CustomerAllfilms("New").subscribe(
    (response: Film[]) => {
      console.log("New Films", response);
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