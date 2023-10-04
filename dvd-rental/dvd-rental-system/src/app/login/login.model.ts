import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class LoginModel {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: [
        '',
        [
          Validators.required
        ],
      ],
    });
  }

  // Getter methods to access form controls
  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }
}