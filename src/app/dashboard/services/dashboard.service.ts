import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {


  private baseUrl : string;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiURL;
  }



  getValuesPieChart(){
    const url = `${this.baseUrl}dashboard/alert`
    return this.http.get(url, {observe: 'response'}).pipe();
  }



  getValuesLineChart() : Observable<any>{
    const url = `${this.baseUrl}dashboard/consommation`
    return this.http.get(url, {observe: 'response'}).pipe();
  }


  getValuesForWidgets() : Observable<any>{
    const url = `${this.baseUrl}dashboard/consommation/type_site`
    return this.http.get(url, {observe : 'response'}).pipe();
  }

  getTotalConsommationDepuisPremierJanvier(){
    const url = `${this.baseUrl}dashboard/consommation/total` ;
    return this.http.get(url, {observe : 'response'}).pipe();
  }
}
