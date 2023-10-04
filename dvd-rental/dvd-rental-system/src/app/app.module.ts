import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatatableComponent } from './datatable/datatable.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card'
import { CdkTableModule } from '@angular/cdk/table';
import {MatInputModule} from '@angular/material/input'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import { LoginComponent } from './login/login.component';

import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    DatatableComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    FormsModule,
    MatCardModule,
    CdkTableModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }