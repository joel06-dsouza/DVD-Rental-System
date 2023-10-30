
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AdminDvdRentalService } from '../admindvdrental.service';
import { DisplayDialogComponent } from '../display-dialog/display-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { FilmDialogComponent } from '../film-dialog/film-dialog.component';
import { MatCardHeader } from '@angular/material/card';



interface YourData {
  id: number;
  address: string;
  storeId: string;

}

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']

})

export class AdmindashboardComponent {
  displayedColumns: string[] = ['storeid', 'address', 'action'];

  dataSource = new MatTableDataSource<YourData>();

  constructor(private adminService: AdminDvdRentalService,private dialog: MatDialog) {}
  storeId1: string = "1";
  storeId2: string = "2";
  ngOnInit() {
    // const storeId1 = "1";
    // const storeId2 = "2"; // Replace with the actual store IDs you want to fetch
    this.loadData1(this.storeId1);
    this.loadData2(this.storeId2);
    // this.getFilmByStoreId() 
  }
  
  // loadData1(storeId: string) {
  //   this.adminService.AdminStore(storeId).subscribe((data: YourData[]) => {
  //     // Update the data source with the fetched data
  //     this.dataSource.data = data;

  //     console.log(data);
  //   });
  // }

  // loadData2(storeId: string) {
  //   this.adminService.AdminStore(storeId).subscribe((data: YourData[]) => {
  //     // Append the fetched data to the existing data source
  //     this.dataSource.data = this.dataSource.data.concat(data);
  //     console.log(data)
  //     console.log(this.dataSource.data);
  //   });
  // }

  loadData1(storeId: string) {
    this.adminService.AdminStore(storeId).subscribe((data: YourData[]) => {
      //storeId property for each row
      data.forEach((row) => {
        row.storeId = storeId;
      });
      this.dataSource.data = data;
    });
  }
  
  loadData2(storeId: string) {
    this.adminService.AdminStore(storeId).subscribe((data: YourData[]) => {
      //  storeId for each row
      data.forEach((row) => {
        row.storeId = storeId;
      });
      this.dataSource.data = this.dataSource.data.concat(data);
    });
  }
  
  // staff(id:string) {
  //   console.log(id);
  //   this.adminService.AdminStoreDetail(id).subscribe((data) => {
  //     // Handle the response data here
  //     console.log(data);
  //   });

  // }


  // film(id:string) {
  //   const storeId = id; // Replace with the actual store ID
  //   this.adminService.AdminFilm(storeId).subscribe(
  //     (response) => {
  //       // Handle the response data here
  //       console.log(response);
  //     },
  //     (error) => {
  //       // Handle any errors here
  //       console.error(error);
  //     }
  //   );
  // }
  staff(id: string) {
    console.log(id);
    this.adminService.AdminStoreDetail(id).subscribe((data) => {
      // Open a dialog to display staff details
      this.dialog.open(DisplayDialogComponent, {
        data: { title: 'Staff Details', content: data } // Pass data to the dialog
      });
    });
  }

  film(id: string) {
    const storeId = id; // Replace with the actual store ID
    this.adminService.AdminFilm(storeId).subscribe(
      (response) => {
        // Open the dialog and pass the response data (table data)
        const dialogRef = this.dialog.open(FilmDialogComponent, {
          data: { tableData: response }, // Pass the response data to the dialog component
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }
  openFilmDetailsDialog(storeId: string) {
    // Retrieve film details for the given store ID
    this.adminService.AdminFilm(storeId).subscribe(
      (response) => {
        // Open the dialog and pass the response data (table data)
        const dialogRef = this.dialog.open(FilmDialogComponent, {
          panelClass: 'dialog-content',
          data: { tableData: response }, // Pass the response data to the dialog component
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }
}





