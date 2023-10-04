import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatatableComponent } from './datatable/datatable.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {path: 'table', component: DatatableComponent},
  {path: 'login', component: LoginComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }