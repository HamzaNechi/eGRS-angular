import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteRoutingModule } from './site-routing.module';
import { DisplaySiteComponent } from './pages/display-site/display-site.component';
import { SiteIndexComponent } from './pages/index/index.component';
import { DetailSiteComponent } from './pages/details/details.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    SiteIndexComponent,
    DetailSiteComponent,
    DisplaySiteComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    MatIconModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    MatTooltipModule
  ]
})
export class SiteModule { }
