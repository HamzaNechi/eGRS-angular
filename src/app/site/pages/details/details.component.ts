import { Component, OnInit } from '@angular/core';
import { SiteModel } from '../../models/model-site';
import { SiteService } from '../../services/site.service';
import { ItemFacture } from '../../models/item-facture-model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailSiteComponent implements OnInit{

  site : SiteModel | undefined;
  listFacture : ItemFacture[] = [];


  district_and_invoice = {
    district : '',
    invoices : 0
  }



  constructor(private siteService: SiteService){}



  ngOnInit(): void {
    this.site = history.state;
    this.getDistrictAndFactureReelle(this.site?.siteId!);
    this.getAllFactureSites(this.site?.siteId!);
  }



  getDistrictAndFactureReelle(siteId :number){
    this.siteService.getNombreFactureReelleLast6MonthAndDistrict(siteId).subscribe({
      next : (response :any) => {
        this.district_and_invoice = response.body
      }
    })
  }



  getAllFactureSites(siteId :number){
    this.siteService.getAllFactureSites(siteId).subscribe({
      next: (response : any) =>{
        this.listFacture = response.body;
      },
      error: (error :any) =>{
        console.log('error get all site facture ', error)
      }
    })
  }




  convertEnTnd(montant : number){
    return montant/1000;
  }


  getTypeFacture(typeId :number){
    return typeId == 1 ? 'Réelle' : 'Intermédiaire';
  }



  getMonth(month : number){
    switch(month){
      case 1 : return 'Janvier';
      case 2 : return 'Février';
      case 3 : return 'Mars';
      case 4 : return 'Avril';
      case 5 : return 'Mai';
      case 6 : return 'Juin';
      case 7 : return 'Juillet';
      case 8 : return 'Août';
      case 9 : return 'Septembre';
      case 10 : return 'Octobre';
      case 11 : return 'Novembre';
      case 12 : return 'Décembre';
      default : return '';
    }
  }



}
