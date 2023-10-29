import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerDvdRentalService } from '../customerdvdrental.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-classic-films',
  templateUrl: './classic-films.component.html',
  styleUrls: ['./classic-films.component.css']
})
export class ClassicFilmsComponent {
  isAllClassicActive = true;
  isRentedClassicActive = false;

  id:string|undefined;
  customer_id: string;

  allClassicColumns: string[] = ['title', 'description', 'release_year', 'language_name', 'rental_duration', 'rental_rate', 'length', 'rating'];
  rentedClassicColumns: string[] =  [
    'film_title', 'amount', 'payment_date', 'store_id', 'staff_id', 'payment_id','rental_id', 'rental_date', 'return_date', 'staff_name', 'category_name' ];
  displayedColumns: string[] = this.allClassicColumns;
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

  showAllClassicFilms() {
    this.isAllClassicActive = true;
    this.isRentedClassicActive = false;
    this.displayedColumns = this.allClassicColumns;
    this.fetchfilms();
  }

  showRentedClassicFilms() {
    this.isAllClassicActive = false;
    this.isRentedClassicActive = true;
    this.displayedColumns = this.rentedClassicColumns;
    this.fetchfilms();
  }

 fetchRented(){
   this.id = localStorage.getItem('cId');
       console.log("customer id", this.id);
   
     console.log("Classic component called");
     this.customerDvdRentalService.CustomerRentedFilms("Classic",this.id).subscribe(
       (response: Film[])=> {
         console.log("Classic Rented Films", response);
         this.dataSource.data = response;
       }
     )
   }

fetchfilms() {
  console.log("classicfilms components called   ");
  this.customerDvdRentalService.CustomerAllfilms("Classic").subscribe(
    (response: Film[]) => {
      console.log("Classic Films", response);
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