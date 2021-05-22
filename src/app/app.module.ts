import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { ChartsModule } from "ng2-charts";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { Covid19ReportsComponent } from './covid19-reports/covid19-reports.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VaccinationComponent } from './vaccination/vaccination.component';
import { TrialComponent } from './trial/trial.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    Covid19ReportsComponent,
    ProjectsComponent,
    ContactusComponent,
    FooterComponent,
    DashboardComponent,
    VaccinationComponent,
    TrialComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    ChartsModule,
    FormsModule
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
