import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'dvdrental';

  showStaffPopup = false;

  openStaffPopup() {
    this.showStaffPopup = true;
  }

  closeStaffPopup() {
    this.showStaffPopup = false;
  }

}