
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { StaffDvdRentalService } from '../staffdvdrental.service';
import { AdminDvdRentalService } from '../admindvdrental.service';
import { CustomerDvdRentalService } from '../customerdvdrental.service';
import { FilmInfo } from '../filminfo.model';
import { Router } from '@angular/router';
import * as crypto from 'crypto-js';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortable } from '@angular/material/sort';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



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