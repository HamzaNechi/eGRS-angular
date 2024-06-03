import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisiteService {

  constructor(private http : HttpClient) { }

  baseUrl= "http://localhost:8089/egrs/visites/";


  getAllVisites(){
    const reqheaders = new HttpHeaders({
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoYW16YUFkbWluIiwiaWF0IjoxNzE3NDEzMTUwLCJleHAiOjE3MTgwMTc5NTB9.oO7x-o6zAgevvRjZPY2h6mpFlnEVSXpgoKkyBvCDfvU`
    })

    return this.http.get(this.baseUrl, {headers : reqheaders, observe: 'response'}).pipe();
  }



  deleteVisite(visiteId: number){
    const reqheaders = new HttpHeaders({
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoYW16YUFkbWluIiwiaWF0IjoxNzE3NDEzMTUwLCJleHAiOjE3MTgwMTc5NTB9.oO7x-o6zAgevvRjZPY2h6mpFlnEVSXpgoKkyBvCDfvU`
    })

    return this.http.delete(`${this.baseUrl}admin/${visiteId}`, {headers : reqheaders, observe: 'response'}).pipe();
  }


  searchVisite(codeSite: string){
    const reqheaders = new HttpHeaders({
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoYW16YUFkbWluIiwiaWF0IjoxNzE3NDEzMTUwLCJleHAiOjE3MTgwMTc5NTB9.oO7x-o6zAgevvRjZPY2h6mpFlnEVSXpgoKkyBvCDfvU`
    })

    return this.http.get(`${this.baseUrl}${codeSite}`, {headers : reqheaders, observe: 'response'}).pipe();
  }
}
