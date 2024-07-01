import { AlertModel } from './../../models/alert.model';
import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-index-alert',
  templateUrl: './index-alert.component.html',
  styleUrl: './index-alert.component.css'
})



export class IndexAlertComponent implements OnInit{
  constructor(
    private alertService: AlertService,
    private router : Router,
    public matDialog : MatDialog
  ){}

  filterForm = {
    type : 3,
    codeSite :'',
    dateAlert :'',
    pourcentage : 40,
  }


  hideRangePourcentage = true;

  ngOnInit(): void {
    console.log(this.filterForm);
    this.getAllAlerts();
  }

  listAlerts : AlertModel[] = [];

  getAllAlerts(){
    this.alertService.getAllAlerts().subscribe(
      {
        next : (response : any) =>{
          this.listAlerts = response.body
        },
        error : (error : any) => {
          console.log(error);
          if(error.body == "Token expired"){
            console.log('token expired redirect to login page');
            this.router.navigate(['/login']);
          }
        }
      }
    )
  }



  getCardArrowClass(difference: number): string {
    if (difference > 50) {
      return 'red';
    } else if (difference > 30) {
      return 'orange';
    } else if (difference > 20) {
      return 'green';
    } else {
      return 'purple';
    }
  }



  /**** filter */
  onSubmitFilterForm(form : NgForm){
    console.log('form filtre = ', form);
    this.filterForm.type = form.value.typeAlert
    this.filterForm.pourcentage = this.hideRangePourcentage ? 0 : form.value.pourcentage
    let criteres;
    if(this.filterForm.codeSite == ''){
      criteres = {
        type : this.filterForm.type,
        dateAlert : this.filterForm.dateAlert,
        pourcentage : this.filterForm.pourcentage,
      }
    }else{
      criteres = this.filterForm
    }

    this.appliqueFilter(criteres);
  }


  updateChoiceType(choice : number){
    this.hideRangePourcentage = choice === 1 || choice === 3
    this.filterForm.type = choice;
  }


  updateValuePourcentage(value : number){
    this.filterForm.pourcentage = value;
  }


  resetFilter(){
    this.filterForm = {
      type : 3,
      codeSite :'',
      dateAlert :'',
      pourcentage : 40,
    }
    this.getAllAlerts();
  }


  appliqueFilter(object : any){
    this.alertService.filterAlerts(object).subscribe(
      {
        next : (response : any) => {
          this.listAlerts = response.body;
        },
        error : (error : any) => {
          console.log("error filter alerts = ", error);
        }
      }
    )
  }
}
