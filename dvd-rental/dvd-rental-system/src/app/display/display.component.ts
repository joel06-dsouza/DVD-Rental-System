import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiResponse } from '../api-response';
import { FilmInfoPage } from '../FilmInfo.page';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, startWith } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { FilmInfo } from '../FilmInfo.model';
import { ChangeDetectorRef } from '@angular/core';
import { state } from '@angular/animations';
import { CustomerDvdRentalService } from '../customerdvdrental.service';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  usersState$: Observable<{ appState: string, appData?: ApiResponse<FilmInfoPage>, error?: HttpErrorResponse }>;
  dataSource = new MatTableDataSource<FilmInfo>();
  displayedColumns: string[] = ['id', 'title', 'description', 'releaseYear', 'languageName', 'rentalDuration', 'rentalRate', 'length', 'rating'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  desiredPage: number;

  constructor(private dvdrentalService: CustomerDvdRentalService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loadData(this.currentPage);
    this.totalPages = 10;
  }


  loadData(page: number) {
    this.dvdrentalService.getPaginatedData(this.storeId, page, this.size).subscribe(
      (response: ApiResponse<FilmInfoPage>) => {
        console.log('API Response:', response['content']);
        if (response.content) {
          this.dataSource.data = response.content;
          this.dataSource.paginator = this.paginator;
          console.log('DataSource: ',this.dataSource.data);
        }
        this.usersState$ = of({ appState: 'APP_LOADED', appData: response });
      },
      (error: HttpErrorResponse) => {
        this.usersState$ = of({ appState: 'APP_ERROR', error });
      }
    );
  }


 
currentPage = 1;
storeId: number = 1; // Define the storeId
size: number = 10; 
totalPages=10;

navigateToPage(page: number) {
  if (page >= 1 && page <= this.totalPages) {
    this.currentPage = page;
    this.loadData(page);
  }
}


getPaginationArray(): number[] {
  const pageNumbers = [];
  for (let i = 1; i <= this.totalPages; i++) {
    pageNumbers.push(i);
  }
  return pageNumbers;
}

goToDesiredPage() {
  if (this.desiredPage >= 1 && this.desiredPage <= this.totalPages) {
    this.navigateToPage(this.desiredPage);
  }
}

}

