import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerDvdRentalService } from '../customerdvdrental.service';

@Component({
  selector: 'app-sci-fi-films',
  templateUrl: './sci-fi-films.component.html',
  styleUrls: ['./sci-fi-films.component.css']
})
export class SciFiFilmsComponent {
  isAllSciFiActive = true;
  isRentedSciFiActive = false;

  allSciFiColumns: string[] = ['title', 'description', 'release_year', 'language_name', 'rental_duration', 'rental_rate', 'length', 'rating'];
  rentedSciFiColumns: string[] =  [
    'film_title', 'amount', 'payment_date', 'store_id', 'staff_id', 'payment_id','rental_id', 'rental_date', 'return_date', 'staff_name', 'category_name' ];

  displayedColumns: string[] = this.allSciFiColumns;
  dataSource: MatTableDataSource<Film>;

  constructor(private customerDvdRentalService: CustomerDvdRentalService) {
    this.dataSource = new MatTableDataSource<Film>([
    ]);
  }

  ngOnInit() {
    this.fetchRented();
    this.fetchfilms(); 
  }

  showAllSciFiFilms() {
    this.isAllSciFiActive = true;
    this.isRentedSciFiActive = false;
    this.displayedColumns = this.allSciFiColumns;
    this.fetchfilms();
  }

  showRentedSciFiFilms() {
    this.isAllSciFiActive = false;
    this.isRentedSciFiActive = true;
    this.displayedColumns = this.rentedSciFiColumns;
    this.fetchRented();
  }

  id:string|undefined;
  customer_id: string;
  
 fetchRented(){
   this.id = localStorage.getItem('cId');
       console.log("customer id", this.id);
   
     console.log("Sci-Fi component called");
     this.customerDvdRentalService.CustomerRentedFilms("Sci-Fi",this.id).subscribe(
       (response: Film[])=> {
         console.log("Sci-Fi Rented Films", response);
         this.dataSource.data = response;
       }
     )
   }

fetchfilms() {
  console.log("nsci-fifilms components called  ");
  this.customerDvdRentalService.CustomerAllfilms("Sci-Fi").subscribe(
    (response: Film[]) => {
      console.log("Sci-Fi Films", response);
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