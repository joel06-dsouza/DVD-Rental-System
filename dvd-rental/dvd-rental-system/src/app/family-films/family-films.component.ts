import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerDvdRentalService } from '../customerdvdrental.service';

@Component({
  selector: 'app-family-films',
  templateUrl: './family-films.component.html',
  styleUrls: ['./family-films.component.css']
})
export class FamilyFilmsComponent {
  isAllFamilyActive = true;
  isRentedFamilyActive = false;

  allFamilyColumns: string[] = ['title', 'description', 'release_year', 'language_name', 'rental_duration', 'rental_rate', 'length', 'rating'];
  rentedFamilyColumns: string[] =  [
    'film_title', 'amount', 'payment_date', 'store_id', 'staff_id', 'payment_id','rental_id', 'rental_date', 'return_date', 'staff_name', 'category_name' ];

  displayedColumns: string[] = this.allFamilyColumns;
  dataSource: MatTableDataSource<Film>;

  constructor(private customerDvdRentalService: CustomerDvdRentalService) {
    this.dataSource = new MatTableDataSource<Film>([
    ]);
  }

  ngOnInit() {
    this.fetchRented();
    this.fetchfilms(); 
  }

  showAllFamilyFilms() {
    this.isAllFamilyActive = true;
    this.isRentedFamilyActive = false;
    this.displayedColumns = this.allFamilyColumns;
    this.fetchfilms();
  }

  showRentedFamilyFilms() {
    this.isAllFamilyActive = false;
    this.isRentedFamilyActive = true;
    this.displayedColumns = this.rentedFamilyColumns;
    this.fetchRented();
  }

    
  id:string|undefined;
  customer_id: string;
  
 fetchRented(){
   this.id = localStorage.getItem('cId');
       console.log("customer id", this.id);
   
     console.log("Family component called");
     this.customerDvdRentalService.CustomerRentedFilms("Family",this.id).subscribe(
       (response: Film[])=> {
         console.log("Family Rented Films", response);
         this.dataSource.data = response;
       }
     )
   }

  fetchfilms() {
    console.log("familyfilms components called   ");
    this.customerDvdRentalService.CustomerAllfilms("Family").subscribe(
      (response: Film[]) => {
        console.log("Family Movies", response);
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