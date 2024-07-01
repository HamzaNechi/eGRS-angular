import { IndexVisiteComponent } from './visite/pages/index-visite/index-visite.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LayoutComponent } from './home/layout/layout.component';
import { IndexComponent } from './dashboard/index/index.component';
import { UserIndexComponent } from './user/index/index.component';
import { SiteIndexComponent } from './site/pages/index/index.component';
import { DetailSiteComponent } from './site/pages/details/details.component';
import { DisplaySiteComponent } from './site/pages/display-site/display-site.component';
import { authGuard } from './auth/auth.guard';
import { IndexReclamationComponent } from './reclamation/pages/index-reclamation/index.component';
import { IndexAlertComponent } from './alert/pages/index-alert/index-alert.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'home',
    component: LayoutComponent,
    canActivate : [authGuard],
    children: [
      { path: '', component : IndexComponent, canActivate : [authGuard]},
      { path: 'dashboard', component: IndexComponent , canActivate : [authGuard]},
      {
        path: 'user',
        component: UserIndexComponent, canActivate : [authGuard]
      },
      {
        path : 'site',
        component : SiteIndexComponent, canActivate : [authGuard],
        children : [
          {path : '', component : DisplaySiteComponent, canActivate : [authGuard]},
          {path : 'details', component : DetailSiteComponent, canActivate : [authGuard]},
        ]
      },
      { path: 'visite', component: IndexVisiteComponent, canActivate : [authGuard] },
      { path: 'reclamation', component: IndexReclamationComponent, canActivate : [authGuard] },
      { path: 'alerts', component: IndexAlertComponent, canActivate : [authGuard] },

    ]
  },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
