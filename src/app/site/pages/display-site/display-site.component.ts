import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SiteService } from '../../services/site.service';
import { SiteModel } from '../../models/model-site';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-site',
  templateUrl: './display-site.component.html',
  styleUrls: ['./display-site.component.css']
})
export class DisplaySiteComponent {

  displayedColumns: string[] = ['Nom', 'Code', 'Réf','Status','Est_Consommation','Actions'];
  siteList: SiteModel[] = [];

  page: number = 0;
  size: number = 20;
  totalPages: number = 0;
  pages: number[] = [];

  searchName = '';

  constructor(
    public dialog: MatDialog,
    private siteService: SiteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.refreshSiteList();
  }

  liveSearchSite(){
    if(this.searchName != ''){
      this.siteService.searchSitesByCodeOrRef(this.page, this.size, this.searchName).subscribe((data: any) => {
        this.siteList = data.body.content;
        this.totalPages = data.body.totalPages;
        this.updatePages();
      });
    } else {
      this.page = 0;
      this.pages = [];
      this.totalPages = 0;
      this.refreshSiteList();
    }
  }

  refreshSiteList(){
    this.siteService.getAllSites(this.page, this.size).subscribe({
      next: (response: any) => {
        this.siteList = response.body.content;
        this.totalPages = response.body.totalPages;
        this.updatePages();
      },
      error: (error: any) => {
        console.error('error response get all site = ', error);
      }
    });
  }


  goToDetailsPages(site : SiteModel){
    this.router.navigate(['/home/site/details'], {state : site});
  }




  // pagination


  updatePages() {
    const startPage = Math.floor(this.page / 10) * 10;
    const endPage = Math.min(startPage + 10, this.totalPages);
    this.pages = Array.from({ length: endPage - startPage }, (_, i) => i + startPage + 1);
  }



  indexPage(index: number) {
    this.page = index ; // ajuster pour l'index de tableau
    if (this.searchName === '') {
      this.refreshSiteList();
    } else {
      this.liveSearchSite();
    }
  }

  previousPage() {
    if (this.page > 0) {
      this.page--;
      if (this.searchName === '') {
        this.refreshSiteList();
      } else {
        this.liveSearchSite();
      }
    }
  }

  nextPage() {
    if (this.page < this.totalPages - 1) {
      this.page++;
      if (this.searchName === '') {
        this.refreshSiteList();
      } else {
        this.liveSearchSite();
      }
    }
  }
}
