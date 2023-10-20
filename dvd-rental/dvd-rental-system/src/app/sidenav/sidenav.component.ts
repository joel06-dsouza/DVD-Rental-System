/* sidenav.component.ts */
import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatIcon } from '@angular/material/icon';
import { MatNavList } from '@angular/material/list';
import { MatSidenavContent } from '@angular/material/sidenav';



@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})


export class SidenavComponent {
  sidenav: any;
  constructor() {}

  toggleSidenav() {
    // Toggle the sidenav
    this.sidenav.toggle();
  
  }
}

