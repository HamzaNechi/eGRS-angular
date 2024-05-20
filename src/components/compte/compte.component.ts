import { Component } from '@angular/core';
import { DialogcomponentComponent } from '../dialogcomponent/dialogcomponent.component';
import { AdduserformComponent } from '../adduserform/adduserform.component';
import { MatDialog } from '@angular/material/dialog'
import {MatIconModule} from '@angular/material/icon'
import { CommonModule } from '@angular/common';

export interface CompteEntity {
  firstname: string;
  lastname: string;
  tel : string;
  role : string;
  action : string[]
}


const ELEMENT_DATA: CompteEntity[] = [
  {firstname: 'Hamza', lastname: 'Nechi', tel: '52907678', role: 'responsable rh', action : ['delete','details']},
  {firstname: 'Wissem', lastname: 'Dayeh', tel: '42904678', role: 'Commercial', action : ['delete','details']},
];



@Component({
  selector: 'app-compte',
  standalone: true,
  imports: [CommonModule,MatIconModule],
  templateUrl: './compte.component.html',
  styleUrl: './compte.component.css'
})


export class CompteComponent {
  displayedColumns: string[] = ['Nom', 'Prénom', 'Tél', 'Role', 'Actions'];
  dataSource = ELEMENT_DATA;



  constructor(public dialog: MatDialog) {}

  openDialogDelete() {
    const dialogRef = this.dialog.open(DialogcomponentComponent, {
      height: 'auto',
      width: 'auto',
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Résultat du dialogue : ${result}`);
      // Faites quelque chose avec le résultat (par exemple, fermer le dialogue)
    });
  }


  openDialogAddUser() {
    const dialogRef = this.dialog.open(AdduserformComponent, {
      height: 'auto',
      width: '40vw',
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Résultat du dialogue : ${result}`);
      // Faites quelque chose avec le résultat (par exemple, fermer le dialogue)
    });
  }
}
