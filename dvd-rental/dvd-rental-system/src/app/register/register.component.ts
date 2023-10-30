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
/* formData:FormGroup;
 */

  constructor(private authService: AuthService, 
    private router: Router) { }

    /* ngOnInit(){
      this.formData=new FormGroup({
        username:new FormControl(''),
        password:new FormControl('')
      })
    } */

  register() : void {
    /* const user=this.formData.value; */
    this.authService.register(this.user).subscribe(response => {
      console.log('Registered:', response);
      this.authService.saveToken(response.token);
      this.router.navigate(['/login']); // Redirect to login after successful registration
    }, error => {
      console.error('Registration error:', error);
    });
  }
}
