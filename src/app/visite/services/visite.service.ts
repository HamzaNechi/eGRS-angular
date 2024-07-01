import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class VisiteService {

  private baseUrl: string;

  constructor(private http : HttpClient) {
    this.baseUrl = `${environment.apiURL}visites/`;
  }




  getAllVisites(){
    return this.http.get(this.baseUrl, {observe: 'response'}).pipe();
  }



  deleteVisite(visiteId: number){
    return this.http.delete(`${this.baseUrl}admin/${visiteId}`, {observe: 'response'}).pipe();
  }


  searchVisite(codeSite: string){
    return this.http.get(`${this.baseUrl}${codeSite}`, { observe: 'response'}).pipe();
  }


  exportToExcel(filterRequest: any){
    return this.http.post(`${this.baseUrl}export/excel`,filterRequest, { responseType: 'blob' });
  }



  filterVisite(filterRequest: any){
    return this.http.post(`${this.baseUrl}filtre`, filterRequest , {observe : 'response'}).pipe();
  }
}
