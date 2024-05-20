import { SiteComponent } from '../components/site/site.component';
import { Routes } from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { VisiteComponent } from '../components/visite/visite.component';
import { CompteComponent } from '../components/compte/compte.component';

export const routes: Routes = [
  {
    path : '',
    pathMatch : 'full',
    redirectTo : '/dashboard'
  },
  {path :"dashboard" , component : DashboardComponent},
  {path :"site" , component : SiteComponent},
  {path :"visite" , component : VisiteComponent},
  {path :"compte" , component : CompteComponent},
  {path :"**" , component : DashboardComponent},
];
