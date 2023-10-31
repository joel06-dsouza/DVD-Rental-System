/* app.module.ts */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
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
/* import { LoginFormComponent } from './login-form/login-form.component'; */
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
 
import { CategoryCardsComponent } from './category-cards/category-cards.component';
import { ActionFilmsComponent } from './action/action-films.component';
import { ForeignFilmsComponent } from './foreign-films/foreign-films.component';
import { GamesFilmsComponent } from './games-films/games-films.component';
import { HorrorFilmsComponent } from './horror-films/horror-films.component';
import { MusicFilmsComponent } from './music-films/music-films.component';
import { NewFilmsComponent } from './new-films/new-films.component';
import { SciFiFilmsComponent } from './sci-fi-films/sci-fi-films.component';
import { SportsFilmsComponent } from './sports-films/sports-films.component';
import { TravelFilmsComponent } from './travel-films/travel-films.component';
import { AnimationFilmsComponent } from './animation-films/animation-films.component';
import { ChildrenFilmsComponent } from './children-films/children-films.component';
import { ClassicFilmsComponent } from './classic-films/classic-films.component';
import { ComedyFilmsComponent } from './comedy-films/comedy-films.component';
import { DocumentaryFilmsComponent } from './documentary-films/documentary-films.component';
import { DramaFilmsComponent } from './drama-films/drama-films.component';
import { FamilyFilmsComponent } from './family-films/family-films.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { RentedFilmsComponent } from './rented-films/rented-films.component';

import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminSideDialogueComponent } from './admin-side-dialogue/admin-side-dialogue.component';
import { PaymentcustComponent } from './paymentcust/paymentcust.component';
import { FilmcustomerComponent } from './filmcustomer/filmcustomer.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { CdkTableModule } from '@angular/cdk/table';
import{CustHeaderComponent} from './cust-header/cust-header.component';
import{CustSideDialogueComponent} from './cust-side-dialogue/cust-side-dialogue.component';

import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule(
  {
  declarations: [
    AppComponent,
    LoginFormComponent,
    /* LoginComponent */
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
    PaymentcustComponent,
    FilmcustomerComponent,
    CustomerdetailsComponent,
    CustHeaderComponent,
    CustSideDialogueComponent,
    CategoryCardsComponent, ActionFilmsComponent,
    ForeignFilmsComponent, GamesFilmsComponent,
    HorrorFilmsComponent, MusicFilmsComponent, NewFilmsComponent, SciFiFilmsComponent,
    SportsFilmsComponent, TravelFilmsComponent,
    AnimationFilmsComponent, ChildrenFilmsComponent,
    ClassicFilmsComponent, ComedyFilmsComponent, DocumentaryFilmsComponent,
    DramaFilmsComponent, FamilyFilmsComponent, AnimationFilmsComponent,
    CustomerDashboardComponent,
    RentedFilmsComponent
  ],
  imports:
   [
    MatToolbarModule,
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
  providers: [  ],

  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
