import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerDvdRentalService } from '../customerdvdrental.service';

@Component({
  selector: 'app-music-films',
  templateUrl: './music-films.component.html',
  styleUrls: ['./music-films.component.css']
})
export class MusicFilmsComponent {
  isAllMusicActive = true;
  isRentedMusicActive = false;

  allMusicColumns: string[] = ['title', 'description', 'release_year', 'language', 'rental_duration', 'rental_rate', 'length', 'rating'];
  rentedMusicColumns: string[] =  [
    'film_title', 'amount', 'payment_date', 'store_id', 'staff_id', 'payment_id','rental_id', 'rental_date', 'return_date', 'staff_name', 'category_name' ];

  displayedColumns: string[] = this.allMusicColumns;
  dataSource: MatTableDataSource<Film>;

  constructor(private customerDvdRentalService: CustomerDvdRentalService) {
    this.dataSource = new MatTableDataSource<Film>([

    ]);
  }

  ngOnInit() {
    this.fetchRented();
    this.fetchfilms(); 
  }

  showAllMusicFilms() {
    this.isAllMusicActive = true;
    this.isRentedMusicActive = false;
    this.displayedColumns = this.allMusicColumns;
    this.fetchfilms();
  }

  showRentedMusicFilms() {
    this.isAllMusicActive = false;
    this.isRentedMusicActive = true;
    this.displayedColumns = this.rentedMusicColumns;
    this.fetchRented();
  }

  id:string|undefined;
  customer_id: string;
  
 fetchRented(){
   this.id = localStorage.getItem('cId');
       console.log("customer id", this.id);
   
     console.log("Music component called");
     this.customerDvdRentalService.CustomerRentedFilms("Music",this.id).subscribe(
       (response: Film[])=> {
         console.log("Music Rented Films", response);
         this.dataSource.data = response;
       }
     )
   }

fetchfilms() {
  console.log("musicfilms components called ");
  this.customerDvdRentalService.CustomerAllfilms("Music").subscribe(
    (response: Film[]) => {
      console.log("Music Films", response);
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