import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexAlertComponent } from './pages/index-alert/index-alert.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    IndexAlertComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ]
})
export class AlertModule { }
