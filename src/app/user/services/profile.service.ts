import { Injectable } from '@angular/core';
import { Profile } from '../models/profile.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  profileList : Profile[] = [];
  private baseUrl : string;

  constructor(private http : HttpClient) {
    this.baseUrl = `${environment.apiURL}profile/`;
   }



  getAllProfile() : Observable<any>{
    const reqheaders = new HttpHeaders({
      'Content-Type': 'application/json',
    })

    return this.http.get(this.baseUrl, {headers : reqheaders}).pipe();
  }


  public updateProfile(profile : Profile){
    const reqheaders = new HttpHeaders({
      'Content-Type' : 'application/json',
    });

    return this.http.put(
      this.baseUrl,
      profile ,
      {headers : reqheaders, observe: 'response'}
    ).pipe();
  }
}
