import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})


export class ReclamationService {
  private baseUrl: string;


  constructor(private http: HttpClient) {
    this.baseUrl = `${environment.apiURL}reclamation/`
  }


  getAllReclaims() : Observable<any> {
    return this.http.get(this.baseUrl, {observe: 'response'}).pipe();
  }


  deleteAllReclaimsSelected(listOfIds : number[]){
    return this.http.post(`${this.baseUrl}delete`, listOfIds , {observe: 'response'}).pipe();
  }
}
