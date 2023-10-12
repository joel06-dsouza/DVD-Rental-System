import { Component } from '@angular/core';
import { SidenavService } from './sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  sidenavOpen: boolean = false;
  paymentDetailsVisible: boolean = false;
  filmDetailsVisible: boolean = false;

  constructor(private sidenavService: SidenavService) {}

  ngOnInit() {
    this.sidenavService.toggleSidenav$.subscribe(() => {
      this.toggleSidenav();
    });
  }
  
  showPaymentDetails() {
    this.paymentDetailsVisible = true;
    this.filmDetailsVisible = false;
  }

  showFilmDetails() {
    this.paymentDetailsVisible = false;
    this.filmDetailsVisible = true;
  }

toggleSidenav() {
  console.log('Sidenav toggled');
  this.sidenavOpen = !this.sidenavOpen;
}

}
