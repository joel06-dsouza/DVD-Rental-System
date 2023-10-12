import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  toggleSidenav$: Subject<void> = new Subject<void>();

  toggleSidenav() {
    this.toggleSidenav$.next();
  }
}
