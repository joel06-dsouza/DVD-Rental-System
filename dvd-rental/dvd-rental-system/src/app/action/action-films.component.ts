import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerDvdRentalService } from '../customerdvdrental.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-action-films',
  templateUrl: './action-films.component.html',
  styleUrls: ['./action-films.component.css']
})
export class ActionFilmsComponent {
  isAllActionActive = true;
  isRentedActionActive = false;
  
 id:string|undefined;
 customer_id: string;

  allActionColumns: string[] = ['title', 'description', 'release_year', 'language_name', 'rental_duration', 'rental_rate', 'length', 'rating'];
  rentedActionColumns: string[] = [
    'film_title', 'amount', 'payment_date', 'store_id', 'staff_id', 'payment_id','rental_id', 'rental_date', 'return_date', 'staff_name', 'category_name' ];

 
  displayedColumns: string[] = this.allActionColumns;
  dataSource: MatTableDataSource<Film>;


  @ViewChild(MatPaginator) paginator!: MatPaginator; 

  constructor(private customerDvdRentalService: CustomerDvdRentalService) {
    this.dataSource = new MatTableDataSource<Film>([
  
    ]);
  }

  ngOnInit() {
    this.fetchfilms(); 
    this.fetchRented();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  showAllActionFilms() {
    this.isAllActionActive = true;
    this.isRentedActionActive = false;
    this.displayedColumns = this.allActionColumns;
    this.fetchfilms();
  }

  //rented films 
  showRentedActionFilms() {
    this.isAllActionActive = false;
    this.isRentedActionActive = true;
    this.displayedColumns = this.rentedActionColumns;
    this.fetchRented();
  }


fetchfilms() {
  console.log("actionfilms component called");
  this.customerDvdRentalService.CustomerAllfilms("Action").subscribe(
    (response: Film[]) => {
      console.log("Action Films", response);
      this.dataSource.data = response;
    }
  );
}


fetchRented(){
  this.id = localStorage.getItem('cId');
      console.log("customer id", this.id);
  
    console.log("actionrented component called");
    this.customerDvdRentalService.CustomerRentedFilms("Action",this.id).subscribe(
      (response: Film[])=> {
        console.log("Action Rented Films", response);
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