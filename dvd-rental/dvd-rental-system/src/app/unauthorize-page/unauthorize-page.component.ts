import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unauthorize-page',
  templateUrl: './unauthorize-page.component.html',
  styleUrls: ['./unauthorize-page.component.css']
})
export class UnauthorizePageComponent {
  constructor(private router: Router) { }

  navigateToHome() {
    this.router.navigate(['']); // Replace with the actual home route
  }

}
