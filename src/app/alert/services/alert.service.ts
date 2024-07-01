import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private baseUrl : string;


  constructor(private http: HttpClient) {
    this.baseUrl =  `${environment.apiURL}alerts/`
  }


  getAllAlerts() : Observable<any> {
    return this.http.get(this.baseUrl, {observe: 'response'}).pipe();
  }



  filterAlerts(criteres : any){
    return this.http.post(`${this.baseUrl}filter`, criteres, {observe : 'response'}).pipe();
  }


}
