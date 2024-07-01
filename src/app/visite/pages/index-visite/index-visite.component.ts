import { Component, OnInit } from '@angular/core';
import { VisiteService } from '../../services/visite.service';
import { VisiteModel } from '../../models/visite.model';
import { MatDialog } from '@angular/material/dialog';
import { DetailVisiteComponent } from '../detail-visite/detail-visite.component';
import { AskForDeleteComponent } from '../../../core/ask-for-delete/ask-for-delete.component';
import { SuccessOperationComponent } from '../../../core/success-operation/success-operation.component';
import { EchecOperationComponent } from '../../../core/echec-operation/echec-operation.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-index-visite',
  templateUrl: './index-visite.component.html',
  styleUrl: './index-visite.component.css'
})
export class IndexVisiteComponent implements OnInit{


  listVisites : VisiteModel[] = [];
  searchField : string = '';
  maxIndex : number = 0;
  minIndex : number =  0;

  filterSpecification = {
    index : this.minIndex,
    siteCode : '',
    dateInsertion : '',
    responsable :''
  }


  constructor(private visiteService: VisiteService,
    public dialog: MatDialog
  ){}



  ngOnInit(): void {
    this.getAllVisites();
  }



  getAllVisites(){
    this.visiteService.getAllVisites().subscribe({
      next: (response: any) =>{
        this.listVisites = response.body;
        this.maxIndex  = Math.max(...this.listVisites.map(visite => visite.indexCompteur));
        this.minIndex  = Math.min(...this.listVisites.map(visite => visite.indexCompteur));
      }
    });

  }


  searchByCodeSite(){
    this.visiteService.searchVisite(this.searchField).subscribe({
      next: (response: any) => {
        console.log('response search visite = ',this.searchField);
        this.listVisites = response.body
      },
      error: (error : any) => {
        console.log('error search visite = ',error);
      }
    });

    this.maxIndex  = this.listVisites.length > 0 ?  Math.max(...this.listVisites.map(visite => visite.indexCompteur)) : 0;
    this.minIndex  = this.listVisites.length > 0 ?  Math.min(...this.listVisites.map(visite => visite.indexCompteur)) : 0;
  }



  deleteVisite(visiteId: number){
    this.visiteService.deleteVisite(visiteId).subscribe({
      next: (response :any) =>{
        console.log('response delete visite ',response)
        if(response.status == 200){
          this.dialog.closeAll();
          this.openSuccessDialog('La suppression a été effectuée avec succès');
          this.getAllVisites();
        }
      },
      error: (error : any) =>{
        console.log('error delete visite ',error)
        if(error.status == 400){
          this.dialog.closeAll();
          this.openErrorDialog("La suppression de la visite a échoué.");
        }

        if(error.status == 200){
          this.dialog.closeAll();
          this.openSuccessDialog('La suppression a été effectuée avec succès');
          this.getAllVisites();
        }
      }
    })
  }


  exportToExcel(){
    this.visiteService.exportToExcel(this.filterSpecification).subscribe(
      {
        next : (response: any) => {
          const blob = new Blob([response], { type: 'application/octet-stream' });
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'visites.xlsx';
          a.click();
          window.URL.revokeObjectURL(url);
        },
        error : (error : any) => {
          console.log('error'+error)
        }
      }
    )
  }



  /**** filter method */

  filterVisiteMethod(form : NgForm){
    this.filterSpecification.index = form.value.index;
    this.filterSpecification.dateInsertion = form.value.dateInsertion;
    this.filterSpecification.responsable = form.value.responsable;
    this.filterSpecification.siteCode = form.value.siteCode;

    this.visiteService.filterVisite(this.filterSpecification).subscribe(
      {
        next : (response : any) => {
          console.log("response filtre visite = ",response);
          this.listVisites = response.body
        },
        error : (error : any)=> {
          console.log(error);
        }
      }
    )
  }


  onChangeRange(value : number){
    this.filterSpecification.index = value;
  }

  resetFiltre(){
    this.filterSpecification = {
      index : 0,
      siteCode : '',
      dateInsertion : '',
      responsable :''
    }
    this.getAllVisites();
  }
  /**  end filtre method */


  openDialogDelete(visiteId: number) {
    const dialogRef = this.dialog.open(AskForDeleteComponent, {
      height: 'auto',
      width: '320px',
      data : `Êtes-vous sûr de vouloir supprimer cet visite ?`
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if(result){
        this.deleteVisite(visiteId);
      }
    });
  }



  openDialogDetail(visite: VisiteModel){
    this.dialog.open(DetailVisiteComponent, {
      width : '50%',
      height: '90%',
      data : visite
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
