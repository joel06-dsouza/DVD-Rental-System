import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

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

  YOUR_DATA: YourData[] = [
    { storeid: 1, managerid: 101, address: '123 Main St' },
    { storeid: 2, managerid: 102, address: '456 Elm St' },
  ];

  constructor() {
    // Set the data source in the constructor
    this.dataSource.data = this.YOUR_DATA;
  }

  edit(row: YourData) {
    // Handle edit action
  }

  view(row: YourData) {
    // Handle view action
  }
}

