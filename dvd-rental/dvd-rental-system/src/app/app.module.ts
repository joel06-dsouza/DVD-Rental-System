// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatInputModule } from '@angular/material/input';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatButtonModule } from '@angular/material/button';
// import { HttpClientModule } from '@angular/common/http';
// import { MatDividerModule } from '@angular/material/divider';
// import { MatIconModule } from '@angular/material/icon';
// import { RouterModule } from '@angular/router';
// import { AppComponent } from './app.component';
// import { LoginFormComponent } from './login-form/login-form.component';
// import { DisplayComponent } from './display/display.component';
// import { AppRoutingModule } from './app-routing.module';
// import { MatTableModule } from '@angular/material/table';
// import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatCardModule } from '@angular/material/card';
// import { CdkTableModule } from '@angular/cdk/table';
// import {MatMenuModule} from '@angular/material/menu';
// import { MatSelectModule } from '@angular/material/select';
// import { ErrorPageComponent } from './error-page/error-page.component';
// import { FooterComponent } from './footer/footer.component';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { HeaderComponent } from './header/header.component';
// import { MatDialogModule } from '@angular/material/dialog';
// import { SideDialogueComponent } from './side-dialogue/side-dialogue.component';
// import { CommonModule } from '@angular/common';
// import { DialogueComponent } from './dialogue/dialogue.component';
// import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
// import { DisplayDialogComponent } from './display-dialog/display-dialog.component';
// import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
// import { FilmDialogComponent } from './film-dialog/film-dialog.component';
// import { ProgressDialogComponent } from './progress-dialog/progress-dialog.component';
// import { AdminHeaderComponent } from './admin-header/admin-header.component';
// import { AdminSideDialogueComponent } from './admin-side-dialogue/admin-side-dialogue.component';
// import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
// import { PaymentcustComponent } from './paymentcust/paymentcust.component';
// import { FilmcustomerComponent } from './filmcustomer/filmcustomer.component';
// import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
// import { CustHeaderComponent } from './cust-header/cust-header.component';
// import { CustSideDialogueComponent } from './cust-side-dialogue/cust-side-dialogue.component';


// @NgModule({
//   declarations: [AppComponent, LoginFormComponent, DisplayComponent, ErrorPageComponent, FooterComponent, HeaderComponent, SideDialogueComponent, DialogueComponent, AdmindashboardComponent, DisplayDialogComponent,FilmDialogComponent, ProgressDialogComponent, AdminHeaderComponent, AdminSideDialogueComponent, CustomerDashboardComponent, PaymentcustComponent, FilmcustomerComponent, CustomerdetailsComponent, CustHeaderComponent, CustSideDialogueComponent],
//   imports: [
//     MatDialogModule,
//     HttpClientModule,
//     BrowserModule,
//     AppRoutingModule,
//     BrowserAnimationsModule,
//     MatTableModule,
//     MatButtonModule,
//     MatIconModule,
//     MatPaginatorModule,
//     FormsModule,
//     MatCardModule,
//     CdkTableModule,
//     MatInputModule,
//     MatMenuModule,
//     MatSelectModule,
//     ReactiveFormsModule,
//     HttpClientModule,
//     MatToolbarModule,
//     MatDialogModule,
//     CommonModule,
//     MatProgressSpinnerModule,
//     MatFormFieldModule 
//   ],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DisplayComponent } from './display/display.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SideDialogueComponent } from './side-dialogue/side-dialogue.component';
import { DialogueComponent } from './dialogue/dialogue.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { DisplayDialogComponent } from './display-dialog/display-dialog.component';
import { FilmDialogComponent } from './film-dialog/film-dialog.component';
import { ProgressDialogComponent } from './progress-dialog/progress-dialog.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminSideDialogueComponent } from './admin-side-dialogue/admin-side-dialogue.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { PaymentcustComponent } from './paymentcust/paymentcust.component';
import { FilmcustomerComponent } from './filmcustomer/filmcustomer.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { CdkTableModule } from '@angular/cdk/table';
import{CustHeaderComponent} from './cust-header/cust-header.component';
import{CustSideDialogueComponent} from './cust-side-dialogue/cust-side-dialogue.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    DisplayComponent,
    ErrorPageComponent,
    FooterComponent,
    HeaderComponent,
    SideDialogueComponent,
    DialogueComponent,
    AdmindashboardComponent,
    DisplayDialogComponent,
    FilmDialogComponent,
    ProgressDialogComponent,
    AdminHeaderComponent,
    AdminSideDialogueComponent,
    CustomerDashboardComponent,
    PaymentcustComponent,
    FilmcustomerComponent,
    CustomerdetailsComponent,
    CustHeaderComponent,
    CustSideDialogueComponent
    
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
    HttpClientModule,
    MatToolbarModule,
    MatDialogModule,
    CommonModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
