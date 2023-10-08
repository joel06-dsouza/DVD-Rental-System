import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AdminDvdRentalService } from '../admindvdrental.service';

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

  constructor(private adminService: AdminDvdRentalService) {}

  ngOnInit() {
    const storeId1 = "1";
    const storeId2 = "2"; // Replace with the actual store IDs you want to fetch
    this.loadData1(storeId1);
    this.loadData2(storeId2);
    // this.getFilmByStoreId() 
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
      console.log(data)
      console.log(this.dataSource.data);
    });
  }

  staff(id:string) {
    console.log(id);
    this.adminService.AdminStoreDetail(id).subscribe((data) => {
      // Handle the response data here
      console.log(data);
    });

  }


  film(id:string) {
    const storeId = id; // Replace with the actual store ID
    this.adminService.AdminFilm(storeId).subscribe(
      (response) => {
        // Handle the response data here
        console.log(response);
      },
      (error) => {
        // Handle any errors here
        console.error(error);
      }
    );
  }
}