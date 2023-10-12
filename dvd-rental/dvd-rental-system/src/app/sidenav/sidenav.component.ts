import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { navbarData } from './nav-data';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  @ViewChild('sidenav') sidenav: MatSidenav;

  collapsed = true;

  constructor(private router: Router) {}

  toggleSidenav(): void {
    this.sidenav.toggle();
  }

  onSidenavToggle(opened: boolean): void {
    this.collapsed = !opened;
  }

  navigateToPayment(): void {
    this.router.navigate(['/payment']);
    this.sidenav.close();
  }

  navigateToFilmDetails(): void {
    this.router.navigate(['/filmdetails']);
    this.sidenav.close();
  }

}