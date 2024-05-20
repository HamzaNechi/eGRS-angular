import { Component } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-adduserform',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './adduserform.component.html',
  styleUrl: './adduserform.component.css'
})



export class AdduserformComponent {

}
