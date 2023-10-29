import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { DisplayComponent } from './display/display.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthGuard } from './auth.guard';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { ActionFilmsComponent } from './action/action-films.component';
import { AnimationFilmsComponent } from './animation-films/animation-films.component';
import { CategoryCardsComponent } from './category-cards/category-cards.component';
import { ChildrenFilmsComponent } from './children-films/children-films.component';
import { ClassicFilmsComponent } from './classic-films/classic-films.component';
import { ComedyFilmsComponent } from './comedy-films/comedy-films.component';
import { DocumentaryFilmsComponent } from './documentary-films/documentary-films.component';
import { DramaFilmsComponent } from './drama-films/drama-films.component';
import { FamilyFilmsComponent } from './family-films/family-films.component';
import { ForeignFilmsComponent } from './foreign-films/foreign-films.component';
import { GamesFilmsComponent } from './games-films/games-films.component';
import { HorrorFilmsComponent } from './horror-films/horror-films.component';
import { MusicFilmsComponent } from './music-films/music-films.component';
import { NewFilmsComponent } from './new-films/new-films.component';
import { SciFiFilmsComponent } from './sci-fi-films/sci-fi-films.component';
import { SportsFilmsComponent } from './sports-films/sports-films.component';
import { TravelFilmsComponent } from './travel-films/travel-films.component';


const routes: Routes = [
  {path:'',component:LoginFormComponent},
  {path:'login' ,component:LoginFormComponent},
  {path:'staff-display',component:DisplayComponent,canActivate:[AuthGuard],data:{role: 'ROLE_STAFF'}},
  {path:'admin-display',component:AdmindashboardComponent,canActivate:[AuthGuard],data:{role: 'ROLE_ADMIN'}},
  {path:'customer-display',component:CustomerDashboardComponent,canActivate:[AuthGuard],data:{role: 'ROLE_CUSTOMER'}},
  {path:'action-films' ,component:ActionFilmsComponent},
  {path:'category' ,component:CategoryCardsComponent},
  {path:'animation-films' ,component:AnimationFilmsComponent},
  {path:'children-films' ,component:ChildrenFilmsComponent},
  {path:'foreign-films' ,component:ForeignFilmsComponent},
  {path:'games-films' ,component:GamesFilmsComponent},
  {path:'horror-films' ,component:HorrorFilmsComponent},
  {path:'music-films' ,component:MusicFilmsComponent},
  {path:'new-films' ,component:NewFilmsComponent},
  {path:'sci-fi-films' ,component:SciFiFilmsComponent},
  {path:'sports-films' ,component:SportsFilmsComponent},
  {path:'travel-films' ,component:TravelFilmsComponent},
  {path:'classic-films' ,component:ClassicFilmsComponent},
  {path:'comedy-films' ,component:ComedyFilmsComponent},
  {path:'documentary-films' ,component:DocumentaryFilmsComponent},
  {path:'drama-films' ,component:DramaFilmsComponent},
  {path:'family-films' ,component:FamilyFilmsComponent},
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
