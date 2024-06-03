import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VisiteModel } from '../../models/visite.model';

@Component({
  selector: 'app-detail-visite',
  templateUrl: './detail-visite.component.html',
  styleUrl: './detail-visite.component.css'
})
export class DetailVisiteComponent {

  
  constructor(@Inject(MAT_DIALOG_DATA) public data : VisiteModel){}
}
