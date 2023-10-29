import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import * as XLSX from 'xlsx';
import { RentedFilm } from '../RentedFilm.model';
import { CustomerDvdRentalService } from '../customerdvdrental.service';

@Component({
  selector: 'app-rented-films',
  templateUrl: './rented-films.component.html',
  styleUrls: ['./rented-films.component.css']
})
export class RentedFilmsComponent implements OnInit {
  rentedFilms: RentedFilm[];
  customerId: number;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'storeId',
    'staffId',
    'staffName',
    'customerId',
    'filmId',
    'title',
    'categoryName',
    'paymentId',
    'paymentDate',
    'rentalId',
    'rentaldate',
    'returndate',
    'amount'
  ];

  dataSource: MatTableDataSource<RentedFilm>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: string[], private dialog: MatDialog, private dvdRentalService: CustomerDvdRentalService) {
    this.dataSource = new MatTableDataSource<RentedFilm>();
  }

  ngOnInit() {
    this.dvdRentalService.getRentedFilmsForLoggedInCustomer().subscribe(
      (data) => {
        this.rentedFilms = data;
        this.dataSource.data = this.rentedFilms; // Set data for the table
        console.log(this.rentedFilms);
        
      },
      (error) => {
        console.error('Error fetching rented films:', error);
      }
    );
  }




  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  convertToExcel(): void {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(document.getElementById('paymenttable'));
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'rented_films.xlsx');
  }

  openAllFilmsDetailsDialog(): void {
    const dialogRef = this.dialog.open(RentedFilmsComponent, {
    });

    dialogRef.afterClosed().subscribe(() => {
    });
  }
}