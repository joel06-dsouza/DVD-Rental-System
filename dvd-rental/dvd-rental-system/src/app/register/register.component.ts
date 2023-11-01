import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  
})
export class RegisterComponent {
  user = { username: '', password: '' };


  constructor(private authService: AuthService, 
    private router: Router) { }

  /*  
  register() : void {
    
    this.authService.register(this.user).subscribe(response => {
      console.log('Registered:', response);
      this.authService.saveToken(response.token);
      this.router.navigate(['/login']); 
    }, error => {
      console.error('Registration error:', error);
    });
  } */
}
