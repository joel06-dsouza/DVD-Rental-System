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
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DisplayComponent } from './display/display.component';
import { AppRoutingModule } from './app-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { CdkTableModule } from '@angular/cdk/table';
import {MatMenuModule} from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FooterComponent } from './footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';

import { MatDialogModule } from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SideDialogueComponent } from './side-dialogue/side-dialogue.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { DialogueComponent } from './dialogue/dialogue.component';
import { StaffComponent } from './staff/staff.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProgressDialogComponent } from './progress-dialog/progress-dialog.component';



@NgModule({
  declarations: [AppComponent, LoginFormComponent, DisplayComponent, ErrorPageComponent, FooterComponent, HeaderComponent, SideDialogueComponent, SidenavComponent, AdmindashboardComponent, DialogueComponent, StaffComponent, ProgressDialogComponent],
  imports: [
    MatProgressSpinnerModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatDialogModule,
    HttpClientModule,
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
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
