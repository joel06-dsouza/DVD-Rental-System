import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { DisplayComponent } from './display/display.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthGuard } from './auth.guard';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { PaymentcustComponent } from './paymentcust/paymentcust.component';
import { FilmcustomerComponent } from './filmcustomer/filmcustomer.component';

const routes: Routes = [
  {path:'',component:LoginFormComponent},
  {path:'login' ,component:LoginFormComponent},
  {path:'staff-display',component:DisplayComponent,canActivate:[AuthGuard]},
  {path:'admin-display',component:AdmindashboardComponent,canActivate:[AuthGuard]},
  { path: '**', component: ErrorPageComponent},
  { path: 'payment', component: PaymentcustComponent },
  { path: 'film', component: FilmcustomerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }