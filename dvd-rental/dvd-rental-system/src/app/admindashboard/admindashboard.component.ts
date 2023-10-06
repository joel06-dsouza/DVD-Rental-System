import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AdminDvdRentalService } from '../admindvdrental.service';

//static data
// interface YourData {
//   storeid: number;
//   managerid: number;
//   address: string;
// }

interface YourData {
  id: number;
  address: string;
  
}

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent {
  displayedColumns: string[] = ['storeid', 'address', 'action'];

  dataSource = new MatTableDataSource<YourData>();

  // YOUR_DATA: YourData[] = [
  //   { storeid: 1, managerid: 101, address: '123 Main St' },
  //   { storeid: 2, managerid: 102, address: '456 Elm St' },
  // ];

  constructor(private adminService: AdminDvdRentalService) {
    // Set the data source in the constructor
   // this.dataSource.data = this.YOUR_DATA;
  }

  ngOnInit() {
    const storeId1 = "1";
    const storeId2 = "2"; // Replace with the actual store IDs you want to fetch
    this.loadData1(storeId1);
    this.loadData2(storeId2);
  }
  
  loadData1(storeId: string) {
    this.adminService.AdminStore(storeId).subscribe((data: YourData[]) => {
      // Update the data source with the fetched data
      this.dataSource.data = data;
      console.log(data);
    });
  }

  loadData2(storeId: string) {
    this.adminService.AdminStore(storeId).subscribe((data: YourData[]) => {
      // Append the fetched data to the existing data source
      this.dataSource.data = this.dataSource.data.concat(data);
      console.log(data);
    });
  }

  edit(row: YourData) {
    // Handle edit action
  }

  view(row: YourData) {
    // Handle view action
  }
}

