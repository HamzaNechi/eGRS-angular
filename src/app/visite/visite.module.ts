import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexVisiteComponent } from './pages/index-visite/index-visite.component';
import { UpdateVisiteComponent } from './pages/update-visite/update-visite.component';
import { MatIconModule } from '@angular/material/icon';
import { DetailVisiteComponent } from './pages/detail-visite/detail-visite.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    IndexVisiteComponent,
    UpdateVisiteComponent,
    DetailVisiteComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    FormsModule
  ]
})
export class VisiteModule { }
