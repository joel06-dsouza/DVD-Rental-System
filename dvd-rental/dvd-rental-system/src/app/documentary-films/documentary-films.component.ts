import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerDvdRentalService } from '../customerdvdrental.service';

@Component({
  selector: 'app-documentary-films',
  templateUrl: './documentary-films.component.html',
  styleUrls: ['./documentary-films.component.css']
})
export class DocumentaryFilmsComponent {
  isAllDocumentaryActive = true;
  isRentedDocumentaryActive = false;

  allDocumentaryColumns: string[] = ['title', 'description', 'release_year', 'language_name', 'rental_duration', 'rental_rate', 'length', 'rating'];
  rentedDocumentaryColumns: string[] =  [
    'film_title', 'amount', 'payment_date', 'store_id', 'staff_id', 'payment_id','rental_id', 'rental_date', 'return_date', 'staff_name', 'category_name' ];

  displayedColumns: string[] = this.allDocumentaryColumns;
  dataSource: MatTableDataSource<Film>;
  

  constructor(private customerDvdRentalService: CustomerDvdRentalService) {
    this.dataSource = new MatTableDataSource<Film>([
    ]);
  }

  ngOnInit() {
    this.fetchRented();
    this.fetchfilms(); 
  }

  showAllDocumentaryFilms() {
    this.isAllDocumentaryActive = true;
    this.isRentedDocumentaryActive = false;
    this.displayedColumns = this.allDocumentaryColumns;
    this.fetchfilms();
  }

  showRentedDocumentaryFilms() {
    this.isAllDocumentaryActive = false;
    this.isRentedDocumentaryActive = true;
    this.displayedColumns = this.rentedDocumentaryColumns;
    this.fetchRented();
  }


  
id:string|undefined;
customer_id: string;

fetchRented(){
 this.id = localStorage.getItem('cId');
     console.log("customer id", this.id);
 
   console.log("Documentary component called");
   this.customerDvdRentalService.CustomerRentedFilms("Documentary",this.id).subscribe(
     (response: Film[])=> {
       console.log("Documentary Rented Films", response);
       this.dataSource.data = response;
     }
   )
 }
fetchfilms() {
  console.log("documentaryfilms components called ");
  this.customerDvdRentalService.CustomerAllfilms("Documentary").subscribe(
    (response: Film[]) => {
      console.log("Documentary Movies", response);
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