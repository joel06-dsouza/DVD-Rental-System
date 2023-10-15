import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerDvdRentalService } from '../customerdvdrental.service';
import { CustomerFilmInfo } from '../customerfilminfo.model';

@Component({
  selector: 'app-filmcustomer',
  templateUrl: './filmcustomer.component.html',
  styleUrls: ['./filmcustomer.component.css']
})
export class FilmcustomerComponent {
  displayedColumns: string[] = ['filmId', 'title', 'customer_id','description', 'categoryName', 'languageName', 'length', 'rating', 'rental_duration','rental_rate','releaseYear','store_id'];
  customerFilms: CustomerFilmInfo[]; // To store customer film details

  constructor(
    private customerDvdRentalService: CustomerDvdRentalService,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    // Fetch customer film details when the dialog component initializes
    this.fetchCustomerFilms();
  }

  // Fetch customer film details
  fetchCustomerFilms() {
    const customerId = this.data.customerId; // Get customer ID from the data passed to the dialog
    this.customerDvdRentalService.getCustomerFilms(customerId).subscribe({
      next: (response: CustomerFilmInfo[]) => {
        this.customerFilms = response;
      },
      error: (error) => {
        console.error('Error fetching customer films:', error);
      }
    });
  }

}

