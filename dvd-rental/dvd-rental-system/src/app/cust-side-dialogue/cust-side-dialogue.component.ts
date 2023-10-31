import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { DialogService } from '../dialog.service';
import { CustomerdetailsComponent } from '../customerdetails/customerdetails.component';
import { CustomerDvdRentalService } from '../customerdvdrental.service';


@Component({
  selector: 'app-cust-side-dialogue',
  templateUrl: './cust-side-dialogue.component.html',
  styleUrls: ['./cust-side-dialogue.component.css']
})
export class CustSideDialogueComponent {



  constructor(private dvdRentalService: CustomerDvdRentalService, private dialog: MatDialog, public dialogRef: MatDialogRef<CustSideDialogueComponent>, private authService: AuthService, private router: Router, private dialogService: DialogService) { }
  // GETTING ITEMS FROM LOCAL STORAGE
  name = localStorage.getItem('cName');
  customerId = localStorage.getItem('cId');

  // CLOSE DIALOG BOX METHOD
  closeDialogue(): void {
    this.dialogRef.close();
  }

  logout() {
    // Open the progress dialog
    this.dialogService.openProgressDialog();

    setTimeout(() => {
      this.authService.logedOut();

      this.dialogService.closeProgressDialog();

      this.router.navigate(['/login']);
      this.dialogRef.close('logout');
    }, 300);
  }

  showDetails(): void {
    this.dvdRentalService.Details(this.customerId).subscribe((response) => {
      this.openCustomerDetailsDialog(response);
    });
  }

  openCustomerDetailsDialog(customerDetails: any) {
    const dialogRef = this.dialog.open(CustomerdetailsComponent, {
      data: customerDetails
    });

    dialogRef.afterClosed().subscribe(() => {
      // Handle any actions after the dialog is closed if needed
    });
  }
}