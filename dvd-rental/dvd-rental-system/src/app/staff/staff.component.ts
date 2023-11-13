import { Component } from '@angular/core';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent {
  staff = { fullName: '', lastName: '' };

  constructor(private staffService: StaffService) {}

  onAddStaff() {
    this.staffService.addStaff(this.staff).subscribe(
      (response: any) => {
        console.log('Staff added successfully', response);
        // You can add code to close the pop-up or reset the form
      },
      (error: any) => {
        console.error('Error adding staff', error);
      }
    );
  }
}
