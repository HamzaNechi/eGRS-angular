import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { AccessAdminError } from '../core/custom-errors';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl : string;

  constructor(private http: HttpClient, private router: Router) {
    this.baseUrl= `${environment.apiURL}auth/login`;
  }



  login(email: string, password: string) {
    const reqheaders = new HttpHeaders({
      "Content-Type": "application/json",
    });

    const body = {
      login: email,
      password: password,
    };

    return this.http
      .post(this.baseUrl, body, { headers: reqheaders, observe: 'response' })
      .pipe(
        tap((res) => {
          const admin = (res.body as { admin: boolean }).admin;
          const status = (res.body as {statusCode : number}).statusCode;
          if(status === 200){
            if (admin === true) {
              this.setSession(res.body);
            }else{
              throw new AccessAdminError("Accès réservé aux administrateurs uniquement");
            }
          }else{
            throw Error;
          }

        })
      );
  }



  private setSession(authResult: any){
    localStorage.setItem('token',authResult.token);
  }


  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  public get isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }
}
