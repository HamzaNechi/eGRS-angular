import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  private baseUrl : string;
  private urlInvoice: string;

  constructor(private http : HttpClient) {
    this.baseUrl = `${environment.apiURL}sites/`;
    this.urlInvoice = `${environment.apiURL}invoices/`
  }





  getAllSites(page: number, size: number) : Observable<any> {
    return this.http.get(`${this.baseUrl}pages?page=${page}&size=${size}`, {observe: 'response'}).pipe();
  }



  searchSitesByCodeOrRef(page: number, size : number, search : string) : Observable<any>{
    return this.http.get(`${this.baseUrl}pages/${search}?page=${page}&size=${size}`, {observe: 'response'}).pipe();
  }



  getNombreFactureReelleLast6MonthAndDistrict(siteId : number){
    var url= `${this.urlInvoice}type/${siteId}`;

    return this.http.get(url, {observe: 'response'}).pipe();
  }


  getAllFactureSites(siteId : number) : Observable<any>{
    var url= `${this.urlInvoice}${siteId}`;
    return this.http.get(url, {observe: 'response'}).pipe();
  }



  getAllSiteNonEncoreVisiter(page: number, size : number, dateMin : string, reqFilter: string): Observable<any>{
    let dateParts = dateMin.split('-');
    let formattedDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
    return this.http.get(`${this.baseUrl}${reqFilter}/pages?page=${page}&size=${size}&dateMin=${formattedDate}`, {observe: 'response'}).pipe();
  }

}
