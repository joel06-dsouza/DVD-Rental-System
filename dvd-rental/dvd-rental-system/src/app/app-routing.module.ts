import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { DisplayComponent } from './display/display.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthGuard } from './auth.guard';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';

const routes: Routes = [
  {path:'',component:LoginFormComponent},
  {path:'login' ,component:LoginFormComponent},
  {path:'staff-display',component:DisplayComponent,canActivate:[AuthGuard],data:{role: 'ROLE_STAFF'}},
  {path:'admin-display',component:AdmindashboardComponent,canActivate:[AuthGuard],data:{role: 'ROLE_ADMIN'}},
  {path:'customer-display',component:CustomerDashboardComponent,canActivate:[AuthGuard],data:{role: 'ROLE_CUSTOMER'}},
  { path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
