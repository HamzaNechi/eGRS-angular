import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexReclamationComponent } from './pages/index-reclamation/index.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    IndexReclamationComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule
  ]
})
export class ReclamationModule { }
