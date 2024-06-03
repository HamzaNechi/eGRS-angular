import { Injectable } from '@angular/core';
import { Profile } from '../models/profile.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  profileList : Profile[] = [];


  constructor(private http : HttpClient) { }



  getAllProfile() : Observable<any>{
    const reqheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoYW16YUFkbWluIiwiaWF0IjoxNzE2ODk3MjYyLCJleHAiOjE3MTc1MDIwNjJ9.acQ6HgnAoI1hxHlP2Qtfw9S3iSfaECYkZ0quIYMrHq8`
    })

    return this.http.get("http://127.0.0.1:8089/egrs/profile/", {headers : reqheaders}).pipe();
  }


  public updateProfile(profile : Profile){
    const reqheaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoYW16YUFkbWluIiwiaWF0IjoxNzE2ODA3MDczLCJleHAiOjE3MTc0MTE4NzN9.MdkZE83HzHxmxo4MNNr6Wcm0_5uQ2NIMiFUUQniz_4c`
    });

    return this.http.put(
      "http://localhost:8089/egrs/profile/",
      profile ,
      {headers : reqheaders, observe: 'response'}
    ).pipe();
  }
}
