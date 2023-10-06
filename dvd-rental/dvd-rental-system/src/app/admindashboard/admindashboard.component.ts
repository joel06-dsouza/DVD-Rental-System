import { Component, EventEmitter, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { StaffComponent } from '../staff/staff.component';


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
  // Output event to trigger the side dialogue
  @Output() openSideDialogue = new EventEmitter<void>();

  displayedColumns: string[] = ['storeid', 'managerid', 'address', 'action'];

  dataSource = new MatTableDataSource<YourData>();

  YOUR_DATA: YourData[] = [
    { storeid: 1, managerid: 101, address: '123 Main St' },
    { storeid: 2, managerid: 102, address: '456 Elm St' },
  ];

  constructor(public dialog:MatDialog) {
    // Set the data source in the constructor
    this.dataSource.data = this.YOUR_DATA;
  }
  ngOnInit(){
    
  }
  openProfileCard(): void {
    const dialogRef = this.dialog.open(StaffComponent, {
      width: '350px' // Adjust the width as needed
    });
  }
}
