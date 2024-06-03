import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-echec-operation',
  templateUrl: './echec-operation.component.html',
  styleUrl: './echec-operation.component.css'
})
export class EchecOperationComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public message : { message: string }) {}
}
