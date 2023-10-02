/* app.module.ts */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatatableComponent } from './datatable/datatable.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {FormsModule} from '@angular/forms'
import { LoginComponent } from './login/login.component';
import { MatPaginator } from '@angular/material/paginator';

import { NgModel } from '@angular/forms';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [
    AppComponent,
    
  ],

  imports: [
   DatatableComponent,SidenavComponent,MatCardModule,MatToolbarModule,

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,LoginComponent,
    ReactiveFormsModule,
  MatTableModule,MatSortModule,MatPaginatorModule
    ,MatFormFieldModule,MatInputModule,MatButtonModule,
    
    MatIconModule,FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
