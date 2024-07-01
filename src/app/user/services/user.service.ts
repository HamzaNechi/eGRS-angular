import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { UserModel } from '../models/user.model';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  userList = [];

  private baseUrl : string;
  private urlAuthRegister : string;


  constructor(private http : HttpClient) {
    this.baseUrl = `${environment.apiURL}users/`;
    this.urlAuthRegister = `${environment.apiURL}auth/register`
  }







  //get all users
  public getAllUsers(page: number, size: number) : Observable<any> {
    return this.http.get(`${this.baseUrl}?page=${page}&size=${size}`, {observe: 'response'}).pipe();
  }



  //search user by login
  public searchUserByLogin(page: number, size: number, login : string) : Observable<any> {

    return this.http.get(`${this.baseUrl}${login}?page=${page}&size=${size}`, {observe: 'response'}).pipe();
  }



  //add user
  public addUser(user : UserModel) : Observable<any>{
    const reqheaders = new HttpHeaders({
      'Content-Type' : 'application/json',
    });

    return this.http.post<UserModel>(this.urlAuthRegister, user,{headers : reqheaders, observe: 'response'}).pipe();
  }



  //delete user
  public deleteUser(id : string){
    const reqheaders = new HttpHeaders({
      'Content-Type' : 'application/json',
    });

    return this.http.delete(`${this.baseUrl}admin/${id}`,{headers : reqheaders, observe: 'response'}).pipe();
  }


  //update user
  public updateUser(user : UserModel){
    const reqheaders = new HttpHeaders({
      'Content-Type' : 'application/json',
    });
    return this.http.put(this.baseUrl,user,{headers : reqheaders, observe: 'response'}).pipe();
  }

}
