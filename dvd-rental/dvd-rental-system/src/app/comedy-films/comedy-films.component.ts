import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerDvdRentalService } from '../customerdvdrental.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-comedy-films',
  templateUrl: './comedy-films.component.html',
  styleUrls: ['./comedy-films.component.css']
})
export class ComedyFilmsComponent {
  isAllComedyActive = true;
  isRentedComedyActive = false;
  id:string|undefined;
  customer_id: string;

  allComedyColumns: string[] = ['title', 'description', 'release_year', 'language_name', 'rental_duration', 'rental_rate', 'length', 'rating'];
  rentedComedyColumns: string[] = [
    'film_title', 'amount', 'payment_date', 'store_id', 'staff_id', 'payment_id','rental_id', 'rental_date', 'return_date', 'staff_name', 'category_name' ];

  displayedColumns: string[] = this.allComedyColumns;
  dataSource: MatTableDataSource<Film>;

  @ViewChild(MatPaginator) paginator!: MatPaginator; 


  constructor(private customerDvdRentalService: CustomerDvdRentalService) {
    this.dataSource = new MatTableDataSource<Film>([
     
    ]);
  }

  ngOnInit() {
    this.fetchRented();
    this.fetchfilms(); 
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  showAllComedyFilms() {
    this.isAllComedyActive = true;
    this.isRentedComedyActive = false;
    this.displayedColumns = this.allComedyColumns;
    this.fetchfilms();
  }

  showRentedComedyFilms() {
    this.isAllComedyActive = false;
    this.isRentedComedyActive = true;
    this.displayedColumns = this.rentedComedyColumns;
    this.fetchRented();
  }


fetchRented(){
 this.id = localStorage.getItem('cId');
     console.log("customer id", this.id);
 
   console.log("Comedy component called");
   this.customerDvdRentalService.CustomerRentedFilms("Comedy",this.id).subscribe(
     (response: Film[])=> {
       console.log("Comedy Rented Films", response);
       this.dataSource.data = response;
     }
   )
 }

fetchfilms() {
  console.log("ccomedyfilms components called ");
  this.customerDvdRentalService.CustomerAllfilms("Comedy").subscribe(
    (response: Film[]) => {
      console.log("Comedy Films", response);
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