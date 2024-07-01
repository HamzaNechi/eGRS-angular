import { MatDialog } from '@angular/material/dialog';
import { ReclamationModel } from '../../models/reclamation.model';
import { ReclamationService } from './../../services/reclamation.service';
import { Component, OnInit } from '@angular/core';
import { SuccessOperationComponent } from '../../../core/success-operation/success-operation.component';
import { EchecOperationComponent } from '../../../core/echec-operation/echec-operation.component';
import { AskForDeleteComponent } from '../../../core/ask-for-delete/ask-for-delete.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})


export class IndexReclamationComponent implements OnInit{

  constructor(
    private reclaimService : ReclamationService,
    public dialog: MatDialog,
  ){}



  ngOnInit(): void {
    this.getAllReclaims();
  }



  reclaimSelectedList : number[] = [];
  reclaimList: ReclamationModel[] = [];

  getAllReclaims(){
    return this.reclaimService.getAllReclaims().subscribe(
      {
        next : (response :any)=> {
          if(response.status == 200){
            this.reclaimList = response.body;
          }
        },
        error : (error : any) => {console.log("error get all reclaims ", error) }
      }
    )
  }



  selectCheckboxHandle(idReclaim : number){
    if(this.reclaimSelectedList.includes(idReclaim)){
      this.reclaimSelectedList.splice(this.reclaimSelectedList.indexOf(idReclaim),1);
    }else{
      this.reclaimSelectedList.push(idReclaim);
    }
  }


  deleteReclaims(){
    if(this.reclaimSelectedList.length > 1){
      this.reclaimService.deleteAllReclaimsSelected(this.reclaimSelectedList).subscribe(
        {
          next : (response : any) => {
            if(response.body == 1){
              this.openSuccessDialog("Les Réclamations ont été supprimer avec succé.");
              this.getAllReclaims();
            }else{
              this.openErrorDialog("Erreur lors de la suppression.");
            }
          },
          error : (error : any ) => {
            this.openErrorDialog(error.body);
          }
        }
      )
    }else{
      this.openErrorDialog("Il faut séléctionner au moins une réclamation!")
    }

  }



  openDialogDelete() {
    const dialogRef = this.dialog.open(AskForDeleteComponent, {
      height: 'auto',
      width: '320px',
      data : `Êtes-vous sûr de vouloir supprimer ses réclamations ?`
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if(result){
        this.deleteReclaims();
      }
    });
  }



  openSuccessDialog(message : string){
    this.dialog.open(SuccessOperationComponent, {
      height : 'auto',
      width : '320px',
      data : message
    });
  }


  openErrorDialog(message : string){
    this.dialog.open(EchecOperationComponent, {
      height : 'auto',
      width : '320px',
      data : message
    });
  }
}
