import { FormsModule } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import * as XLSX from 'xlsx'; 


@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule,
    MatTableModule,MatPaginatorModule,
    
  ],
})



/**
 * @title Table with filtering
 */

export class DatatableComponent {
  displayedColumns: string[] = ['filmId', 'title', 'description',
   'releaseYear', 'language', 'rentalDuration', 'rentalRate', 'length', 'rating', 'actor'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  filmIdFilter: string = '';


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  customFilterPredicate(data: Film, filter: string): boolean {
    return data.filmId.toString().includes(filter);
  }

  @ViewChild(MatPaginator) paginator:MatPaginator;

  ngOnInit() {
    // Set the custom filterPredicate
    this.dataSource.filterPredicate = this.customFilterPredicate;
    this.dataSource.paginator = this.paginator;
  }


  exportToExcel(): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(ELEMENT_DATA);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, 'film_data');
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const a: HTMLAnchorElement = document.createElement('a');
    a.href = window.URL.createObjectURL(data);
    a.download = fileName + '.xlsx';
    a.click();
  }
}
 
export interface Film {
  filmId: number;
  title: string;
  description: string;
  releaseYear: number;
  language: string;
  rentalDuration: number;
  rentalRate: number;
  length: number;
  rating: string;
  actor: string;
}

const ELEMENT_DATA: Film[] = [
  { filmId: 1, title: 'Film 1', description: 'Description 1', releaseYear: 2023, language: 'English', rentalDuration: 3, 
  rentalRate: 2.99, length: 120, rating: 'PG-13', actor: 'Actor 1' },
  {
    filmId: 2,
    title: 'Film 2',
    description: 'Description for Film 2',
    releaseYear: 2020,
    language: 'Hindi',
    rentalDuration: 9,
    rentalRate: 3.99,
    length: 129,
    rating: 'R',
    actor: 'Actor 2'
  },
  {
    filmId: 3,
    title: 'Film 3',
    description: 'Description for Film 3',
    releaseYear: 2022,
    language: 'English',
    rentalDuration: 4,
    rentalRate: 5.99,
    length: 134,
    rating: 'PG-13',
    actor: 'Actor 3'
  },
  {
    filmId: 4,
    title: 'Film 4',
    description: 'Description for Film 4',
    releaseYear: 2019,
    language: 'Marathi',
    rentalDuration: 4,
    rentalRate: 6.99,
    length: 111,
    rating: 'PG-13',
    actor: 'Actor 4'
  }

  
];
