import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerDvdRentalService } from '../customerdvdrental.service';

@Component({
  selector: 'app-horror-films',
  templateUrl: './horror-films.component.html',
  styleUrls: ['./horror-films.component.css']
})
export class HorrorFilmsComponent {
  isAllHorrorActive = true;
  isRentedHorrorActive = false;

  allHorrorColumns: string[] = ['title', 'description', 'release_year', 'language_name', 'rental_duration', 'rental_rate', 'length', 'rating'];
  rentedHorrorColumns: string[] =  [
    'film_title', 'amount', 'payment_date', 'store_id', 'staff_id', 'payment_id','rental_id', 'rental_date', 'return_date', 'staff_name', 'category_name' ];

  displayedColumns: string[] = this.allHorrorColumns;
  dataSource: MatTableDataSource<Film>;

  constructor(private customerDvdRentalService: CustomerDvdRentalService) {
    this.dataSource = new MatTableDataSource<Film>([

    ]);
  }

  ngOnInit() {
    this.fetchRented();
    this.fetchfilms(); 
  }

  showAllHorrorFilms() {
    this.isAllHorrorActive = true;
    this.isRentedHorrorActive = false;
    this.displayedColumns = this.allHorrorColumns;
    this.fetchfilms();
  }

  showRentedHorrorFilms() {
    this.isAllHorrorActive = false;
    this.isRentedHorrorActive = true;
    this.displayedColumns = this.rentedHorrorColumns;
    this.fetchfilms();
  }

  id:string|undefined;
  customer_id: string;
  
 fetchRented(){
   this.id = localStorage.getItem('cId');
       console.log("customer id", this.id);
   
     console.log("Horror component called");
     this.customerDvdRentalService.CustomerRentedFilms("Horror",this.id).subscribe(
       (response: Film[])=> {
         console.log("Horror Rented Films", response);
         this.dataSource.data = response;
       }
     )
   }

fetchfilms() {
  console.log("horrorfilms components called  ");
  this.customerDvdRentalService.CustomerAllfilms("Horror").subscribe(
    (response: Film[]) => {
      console.log("Horror Films", response);
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