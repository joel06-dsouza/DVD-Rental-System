import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { FilmInfo } from '../FilmInfo.model';
import { FilmDialogComponent } from '../film-dialog/film-dialog.component';


interface YourData {
  storeid: number;
  managerid: number;
  address: string;
}
@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent {
  displayedColumns: string[] = ['storeid', 'managerid', 'address', 'action'];

  dataSource = new MatTableDataSource<YourData>();
  // dataSource: MatTableDataSource<FilmInfo>;
  searchValue: any;


  YOUR_DATA: YourData[] = [
    { storeid: 1, managerid: 101, address: '123 Main St' },
    { storeid: 2, managerid: 102, address: '456 Elm St' },
  ];

  constructor(private dialog: MatDialog) {
    // Set the data source in the constructor
    this.dataSource.data = this.YOUR_DATA;
    // this.dataSource = new MatTableDataSource<FilmInfo>([]); // Provide initial data
    this.searchValue = {};
  }
  



  // Function to open the film dialogue
  openFilmDialogue() {
    const dialogRef = this.dialog.open(FilmDialogComponent, {
      data: { dataSource: this.dataSource, searchValue: this.searchValue }
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
  }

  edit(row: YourData) {
    // Handle edit action
  }

  view(row: YourData) {
    // Handle view action
  }
}
