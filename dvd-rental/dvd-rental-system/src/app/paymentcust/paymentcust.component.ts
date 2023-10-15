import { Component, ViewChild, OnInit, Input, OnDestroy, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerDvdRentalService } from '../customerdvdrental.service';
import { PaymentInfo } from '../paymentinfo.model';
import { Subscription } from 'rxjs';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-paymentcust',
  templateUrl: './paymentcust.component.html',
  styleUrls: ['./paymentcust.component.css']
})
export class PaymentcustComponent  {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
