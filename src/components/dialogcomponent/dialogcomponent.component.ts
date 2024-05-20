import { Component } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'




@Component({
  selector: 'app-dialogcomponent',
  standalone: true,
  imports: [MatButtonModule,MatDialogModule, MatIconModule],
  templateUrl: './dialogcomponent.component.html',
  styleUrl: './dialogcomponent.component.css'
})




export class DialogcomponentComponent {

}

