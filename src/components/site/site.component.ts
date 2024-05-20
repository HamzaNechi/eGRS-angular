import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon'
import { CommonModule } from '@angular/common';
import { DialogcomponentComponent } from '../dialogcomponent/dialogcomponent.component';
import { MatDialog } from '@angular/material/dialog'

export interface SiteEntity {
  name: string;
  code: string;
  sharing : boolean;
  ref : string;
  action : string[]
}


const ELEMENT_DATA: SiteEntity[] = [
  {name: 'ARIANA_GHAZELA_0001', code: 'ARI_0001', sharing: false, ref: '1254788', action : ['delete','details']},
  {name: 'KEF_TUNIS', code: 'KEF_0001', sharing: false, ref: '1254788', action : ['delete','details']},
  {name: 'ARIANA_ARIANA_0005', code: 'ARI_0005', sharing: true, ref: '1254788', action : ['delete','details']},
  {name: 'ARIANA_GHAZELA_0001', code: 'ARI_0001', sharing: false, ref: '1254788', action : ['delete','details']},
];

@Component({
  selector: 'app-site',
  standalone: true,
  imports: [MatTableModule,MatIconModule, CommonModule],
  templateUrl: './site.component.html',
  styleUrl: './site.component.css'
})



export class SiteComponent {
  displayedColumns: string[] = ['Nom', 'Code', 'Réf', 'Status', 'Actions'];
  dataSource = ELEMENT_DATA;
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogcomponentComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Résultat du dialogue : ${result}`);
      // Faites quelque chose avec le résultat (par exemple, fermer le dialogue)
    });
  }
}
