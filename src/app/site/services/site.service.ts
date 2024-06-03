import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  constructor(private http : HttpClient) { }


  private baseUrl = 'http://localhost:8089/egrs/sites/';


  getAllSites(page: number, size: number) : Observable<any> {
    const reqheaders = new HttpHeaders({
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoYW16YUFkbWluIiwiaWF0IjoxNzE2ODk3MjYyLCJleHAiOjE3MTc1MDIwNjJ9.acQ6HgnAoI1hxHlP2Qtfw9S3iSfaECYkZ0quIYMrHq8`
    })

    return this.http.get(`${this.baseUrl}pages?page=${page}&size=${size}`, {headers : reqheaders, observe: 'response'}).pipe();
  }



  searchSitesByCodeOrRef(page: number, size : number, search : string) : Observable<any>{
    const reqheaders = new HttpHeaders({
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoYW16YUFkbWluIiwiaWF0IjoxNzE2ODk3MjYyLCJleHAiOjE3MTc1MDIwNjJ9.acQ6HgnAoI1hxHlP2Qtfw9S3iSfaECYkZ0quIYMrHq8`
    })

    return this.http.get(`${this.baseUrl}pages/${search}?page=${page}&size=${size}`, {headers : reqheaders, observe: 'response'}).pipe();
  }



  getNombreFactureReelleLast6MonthAndDistrict(siteId : number){
    var url= `http://localhost:8089/egrs/invoices/type/${siteId}`;
    const reqheaders = new HttpHeaders({
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoYW16YUFkbWluIiwiaWF0IjoxNzE2ODk3MjYyLCJleHAiOjE3MTc1MDIwNjJ9.acQ6HgnAoI1hxHlP2Qtfw9S3iSfaECYkZ0quIYMrHq8`
    })

    return this.http.get(url, {headers : reqheaders, observe: 'response'}).pipe();
  }


  getAllFactureSites(siteId : number) : Observable<any>{
    var url= `http://localhost:8089/egrs/invoices/${siteId}`;
    const reqheaders = new HttpHeaders({
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoYW16YUFkbWluIiwiaWF0IjoxNzE2ODk3MjYyLCJleHAiOjE3MTc1MDIwNjJ9.acQ6HgnAoI1hxHlP2Qtfw9S3iSfaECYkZ0quIYMrHq8`
    })

    return this.http.get(url, {headers : reqheaders, observe: 'response'}).pipe();
  }

}
