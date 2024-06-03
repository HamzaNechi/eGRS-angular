import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-success-operation',
  templateUrl: './success-operation.component.html',
  styleUrl: './success-operation.component.css'
})
export class SuccessOperationComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public message : { message: string }) {}
}
