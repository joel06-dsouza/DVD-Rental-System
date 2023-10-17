
import { BreakpointObserver } from '@angular/cdk/layout';
import {Component, ViewChild} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { PaymentcustComponent } from '../paymentcust/paymentcust.component';
import { MatDialog } from '@angular/material/dialog';
import { FilmcustomerComponent } from '../filmcustomer/filmcustomer.component';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent {

  title = 'material-responsive-sidenav';
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isMobile= true;
  isCollapsed = true;


  constructor(private observer: BreakpointObserver,private dialog: MatDialog) {}

  ngOnInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if(screenSize.matches){
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }

  toggleMenu() {
    if(this.isMobile){
      this.sidenav.toggle();
      this.isCollapsed = false;
    } else {
      this.sidenav.open();
      this.isCollapsed = !this.isCollapsed;
    }
  }
  openProfileCard(){

  }

  openFilmDetails(): void {
    const dialogRef = this.dialog.open(FilmcustomerComponent, {
      width: '800px', // Set the width according to your needs
    });
  }
 
openPaymentDetails(): void {
  const dialogRef = this.dialog.open(PaymentcustComponent, {
    width: '600px', // Set the width according to your needs
  });
}

}
