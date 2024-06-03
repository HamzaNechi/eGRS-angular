import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog'
import { UserRoutingModule } from './user-routing.module';
import { UserIndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';
import { DisplayProfileComponent } from './display-profile/display-profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';



@NgModule({
  declarations: [
    UserIndexComponent,
    CreateComponent,
    UpdateComponent,
    DisplayProfileComponent,
    UpdateProfileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatDialogModule,
    MatIconModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule
  ]
})
export class UserModule { }
