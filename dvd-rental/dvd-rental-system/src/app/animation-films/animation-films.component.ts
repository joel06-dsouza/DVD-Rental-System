import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerDvdRentalService } from '../customerdvdrental.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-animation-films',
  templateUrl: './animation-films.component.html',
  styleUrls: ['./animation-films.component.css']
})
export class AnimationFilmsComponent {
  isAllAnimationActive = true;
  isRentedAnimationActive = false;

  allAnimationColumns: string[] = ['title', 'description', 'release_year', 'language_name', 'rental_duration', 'rental_rate', 'length', 'rating'];
  rentedAnimationColumns: string[] = [
    'film_title', 'amount', 'payment_date', 'store_id', 'staff_id', 'payment_id','rental_id', 'rental_date', 'return_date', 'staff_name', 'category_name' ];

  displayedColumns: string[] = this.allAnimationColumns;
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

  showAllAnimationFilms() {
    this.isAllAnimationActive = true;
    this.isRentedAnimationActive = false;
    this.displayedColumns = this.allAnimationColumns;
   this.fetchfilms();
  }

  showRentedAnimationFilms() {
    this.isAllAnimationActive = false;
    this.isRentedAnimationActive = true;
    this.displayedColumns = this.rentedAnimationColumns;
   this.fetchRented();
  }

  id:string|undefined;
  customer_id: string;

 fetchRented(){
   this.id = localStorage.getItem('cId');
       console.log("customer id", this.id);
   
     console.log("Animation component called");
     this.customerDvdRentalService.CustomerRentedFilms("Animation",this.id).subscribe(
       (response: Film[])=> {
         console.log("Animation Rented Films", response);
         this.dataSource.data = response;
       }
     )
   }


fetchfilms() {
  console.log("animation component called");
  this.customerDvdRentalService.CustomerAllfilms("Animation").subscribe(
    (response: Film[]) => {
      console.log("Animation Films", response);
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