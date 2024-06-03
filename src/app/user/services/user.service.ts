import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  userList = [];


  constructor(private http : HttpClient) { }

  private baseUrl = 'http://localhost:8089/egrs/users/';

  private urlAuthRegister = 'http://localhost:8089/egrs/auth/register';





  //get all users
  public getAllUsers(page: number, size: number) : Observable<any> {
    const reqheaders = new HttpHeaders({
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoYW16YUFkbWluIiwiaWF0IjoxNzE2ODk3MjYyLCJleHAiOjE3MTc1MDIwNjJ9.acQ6HgnAoI1hxHlP2Qtfw9S3iSfaECYkZ0quIYMrHq8`
    })

    return this.http.get(`${this.baseUrl}?page=${page}&size=${size}`, {headers : reqheaders, observe: 'response'}).pipe();
  }



  //search user by login
  public searchUserByLogin(page: number, size: number, login : string) : Observable<any> {
    const reqheaders = new HttpHeaders({
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoYW16YUFkbWluIiwiaWF0IjoxNzE2MzE4NDkwLCJleHAiOjE3MTY5MjMyOTB9.HNXF6mgAPQN27pmQgWMxZCNcJnIFebcNQESnmSnPtEI`
    })

    return this.http.get(`${this.baseUrl}${login}?page=${page}&size=${size}`, {headers : reqheaders, observe: 'response'}).pipe();
  }



  //add user
  public addUser(user : UserModel) : Observable<any>{
    const reqheaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoYW16YUFkbWluIiwiaWF0IjoxNzE2ODk3MjYyLCJleHAiOjE3MTc1MDIwNjJ9.acQ6HgnAoI1hxHlP2Qtfw9S3iSfaECYkZ0quIYMrHq8`
    });

    return this.http.post<UserModel>(this.urlAuthRegister, user,{headers : reqheaders, observe: 'response'}).pipe();
  }



  //delete user
  public deleteUser(id : string){
    const reqheaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoYW16YUFkbWluIiwiaWF0IjoxNzE2ODA3MDczLCJleHAiOjE3MTc0MTE4NzN9.MdkZE83HzHxmxo4MNNr6Wcm0_5uQ2NIMiFUUQniz_4c`
    });

    return this.http.delete(`${this.baseUrl}admin/${id}`,{headers : reqheaders, observe: 'response'}).pipe();
  }


  //update user
  public updateUser(user : UserModel){
    const reqheaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoYW16YUFkbWluIiwiaWF0IjoxNzE2ODA3MDczLCJleHAiOjE3MTc0MTE4NzN9.MdkZE83HzHxmxo4MNNr6Wcm0_5uQ2NIMiFUUQniz_4c`
    });
    console.log('user from update service ', user);
    return this.http.put(this.baseUrl,user,{headers : reqheaders, observe: 'response'}).pipe();
  }

}
