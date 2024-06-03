import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatDialog } from '@angular/material/dialog';
import { EchecOperationComponent } from '../../core/echec-operation/echec-operation.component';
import { AccessAdminError } from '../../core/custom-errors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  constructor(
    private router : Router,
    private authService: AuthService,
    private dialog: MatDialog
  ){}
  username: string = '';
  password: string = '';
  errorMessage: string = '';



  onLogin(){
    if(this.username != '' && this.password != ''){
      this.authService.login(this.username, this.password).subscribe({
        next: (response : any) => {
          this.router.navigateByUrl('/home', { replaceUrl: true });
        },
        error: (error :any) =>{
          if(error instanceof AccessAdminError){
            this.openErrorDialog(error.message)
          }else{
            this.openErrorDialog("Vérifier vos informations.")
          }
        }
      });
    }else{
      this.errorMessage = 'Login et mot de passe obligatoire !'
    }

  }





  openErrorDialog(message : string){
    this.dialog.open(EchecOperationComponent, {
      height : 'auto',
      width : '320px',
      data : message
    });
  }
}
