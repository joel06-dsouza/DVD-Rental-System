import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { DisplayComponent } from './display/display.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthGuard } from './auth.guard';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { StaffComponent } from './staff/staff.component';

const routes: Routes = [
  {path:'',component:LoginFormComponent},
  {path:'login' ,component:LoginFormComponent},
  {path: 'admin', component: AdmindashboardComponent,canActivate: [AuthGuard] },
  {path:'display',component:DisplayComponent,canActivate:[AuthGuard]},
  {path:'staff',component:StaffComponent,canActivate:[AuthGuard]},
  { path: '**', component: ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
