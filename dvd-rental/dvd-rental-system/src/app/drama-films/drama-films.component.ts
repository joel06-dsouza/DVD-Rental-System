import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerDvdRentalService } from '../customerdvdrental.service';

@Component({
  selector: 'app-drama-films',
  templateUrl: './drama-films.component.html',
  styleUrls: ['./drama-films.component.css']
})
export class DramaFilmsComponent {
  isAllDramaActive = true;
  isRentedDramaActive = false;

  allDramaColumns: string[] = ['title', 'description', 'release_year', 'language_name', 'rental_duration', 'rental_rate', 'length', 'rating'];
  rentedDramaColumns: string[] =  [
    'film_title', 'amount', 'payment_date', 'store_id', 'staff_id', 'payment_id','rental_id', 'rental_date', 'return_date', 'staff_name', 'category_name' ];

  displayedColumns: string[] = this.allDramaColumns;
  dataSource: MatTableDataSource<Film>;

  constructor(private customerDvdRentalService: CustomerDvdRentalService) {
    this.dataSource = new MatTableDataSource<Film>([
    ]);
  }

  ngOnInit() {
    this.fetchRented();
    this.fetchfilms(); 
  }


  showAllDramaFilms() {
    this.isAllDramaActive = true;
    this.isRentedDramaActive = false;
    this.displayedColumns = this.allDramaColumns;
    this.fetchfilms();
  }

  showRentedDramaFilms() {
    this.isAllDramaActive = false;
    this.isRentedDramaActive = true;
    this.displayedColumns = this.rentedDramaColumns;
    this.fetchRented();
  }
  
  id:string|undefined;
  customer_id: string;

 fetchRented(){
   this.id = localStorage.getItem('cId');
       console.log("customer id", this.id);
   
     console.log("Drama component called");
     this.customerDvdRentalService.CustomerRentedFilms("Drama",this.id).subscribe(
       (response: Film[])=> {
         console.log("Drama Rented Films", response);
         this.dataSource.data = response;
       }
     )
   }

   
fetchfilms() {
  console.log("dramafilms components called   ");
  this.customerDvdRentalService.CustomerAllfilms("Drama").subscribe(
    (response: Film[]) => {
      console.log("Drama Films", response);
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