import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilmcustomerComponent } from '../filmcustomer/filmcustomer.component';
import { CustomerFilmInfo } from '../customerfilminfo.model';

@Injectable({
  providedIn: 'root',
})
export class FilmDetailsDialogService {
  constructor(private dialog: MatDialog) {}

  openFilmDetailsDialog(data: CustomerFilmInfo[]) {
    this.dialog.open(FilmcustomerComponent, {
      data: data,
    });
  }
}
