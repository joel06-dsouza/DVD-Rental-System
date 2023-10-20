import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { DisplayComponent } from './display/display.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthGuard } from './auth.guard';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
//mukul
import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';
import { MatNavList } from '@angular/material/list';
import { SidenavComponent } from './sidenav/sidenav.component';


const routes: Routes = [
  {path:'',component:LoginFormComponent},
  {path:'login' ,component:LoginFormComponent},
  {path:'staff-display',component:DisplayComponent,canActivate:[AuthGuard]},
  {path:'admin-display',component:AdmindashboardComponent},
  { path: '**', component: ErrorPageComponent},

  //mukul
  {path:'sidenav',component:SidenavComponent},
  {path:'tab1',component:Tab1Component},
  {path:'tab2',component:Tab2Component},
  {path:'',redirectTo:'/tab1',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }