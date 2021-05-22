import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component'; 
import { ProjectsComponent } from './projects/projects.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VaccinationComponent } from './vaccination/vaccination.component';
import { TrialComponent } from './trial/trial.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'projects', component: ProjectsComponent
  },
  {
    path: 'contactus', component: ContactusComponent
  },
  {
    path: 'vaccination', component: VaccinationComponent
  },
  {
    path: 'trial', component: TrialComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }