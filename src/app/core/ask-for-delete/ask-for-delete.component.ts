import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-ask-for-delete',
  templateUrl: './ask-for-delete.component.html',
  styleUrl: './ask-for-delete.component.css'
})


export class AskForDeleteComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public message : { message: string }) {}
}
