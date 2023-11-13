import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerDvdRentalService } from '../customerdvdrental.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-children-films',
  templateUrl: './children-films.component.html',
  styleUrls: ['./children-films.component.css']
})
export class ChildrenFilmsComponent {
  isAllChildrenActive = true;
  isRentedChildrenActive = false;

  allChildrenColumns: string[] = ['title', 'description', 'release_year', 'language_name', 'rental_duration', 'rental_rate', 'length', 'rating'];
  rentedChildrenColumns: string[] = [
    'film_title', 'amount', 'payment_date', 'store_id', 'staff_id', 'payment_id','rental_id', 'rental_date', 'return_date', 'staff_name', 'category_name' ];

  displayedColumns: string[] = this.allChildrenColumns;
  dataSource: MatTableDataSource<Film>;

  id:string|undefined;
  customer_id: string;

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

  showAllChildrenFilms() {
    this.isAllChildrenActive = true;
    this.isRentedChildrenActive = false;
    this.displayedColumns = this.allChildrenColumns;
    this.fetchfilms();
  }

  showRentedChildrenFilms() {
    this.isAllChildrenActive = false;
    this.isRentedChildrenActive = true;
    this.displayedColumns = this.rentedChildrenColumns;
    this.fetchRented();
  }

  
 
 fetchRented(){
   this.id = localStorage.getItem('cId');
       console.log("customer id", this.id);
   
     console.log("Children component called");
     this.customerDvdRentalService.CustomerRentedFilms("Children",this.id).subscribe(
       (response: Film[])=> {
         console.log("Children Rented Films", response);
         this.dataSource.data = response;
       }
     )
   }

fetchfilms() {
  console.log("childrenfilms components called ");
  this.customerDvdRentalService.CustomerAllfilms("Children").subscribe(
    (response: Film[]) => {
      console.log("Children Films", response);
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