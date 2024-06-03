import { Component, Inject, signal } from '@angular/core';
import { Profile } from '../models/profile.model';
import { UserModel } from '../models/user.model';
import { ProfileService } from '../services/profile.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { UserService } from '../services/user.service';
import { NgForm } from '@angular/forms';
import { SuccessOperationComponent } from '../../core/success-operation/success-operation.component';
import { EchecOperationComponent } from '../../core/echec-operation/echec-operation.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  profileList : Profile[] = [];


  successCreate = signal(false);


  userForm : UserModel = {
    login : this.data.login,
    email : this.data.email,
    firstName :this.data.firstName,
    isAd : this.data.profile.profileId == 1 ? 1 : 0,
    lastName : this.data.lastName,
    profile : {
      profileId : this.data.profile.profileId,
      profile : this.data.profile.profile,
      description : this.data.profile.description
    },
    status : this.data.status
  };


  constructor(
    private profileService : ProfileService,
    private userService : UserService,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data : UserModel
  ){}




  ngOnInit(): void {
    this.getAllProfile();
  }




  //add user
  onSubmitForm(form : NgForm){
    if(form.valid){
      this.userForm.login = this.data.login;
      this.userForm.email =form.value.email;
      this.userForm.firstName =form.value.firstName;
      this.userForm.password =form.value.password;
      this.userForm.lastName =form.value.lastName;
      this.userForm.profile.profileId = form.value.profile;
      this.userForm.isAd = form.value.profile == 1 ? 1 : 0;
      this.successCreate.set(true);
    }else{
      this.successCreate.set(false);
    }
    this.updateUser();
  }
  //end add user







  updateUser(){
    this.userService.updateUser(this.userForm).subscribe({
      next: (result: any) => {
        this.dialog.closeAll();
        console.log('response update user = ', result);
        if (result.status === 200) {
          this.openSuccessDialog("Les modifications ont été enregistrées avec succès.");
        } else {
          this.openErrorDialog(`La mise à jour de l'utilisateur ${this.data.login} a échoué.`);
        }
      },
      error: (error: any) => {
        this.dialog.closeAll();
        this.openErrorDialog(`La mise à jour de l'utilisateur ${this.data.login} a échoué.`);
      },
      // complete: () => {
      //   // Optionnel: ajoutez une logique ici si vous avez besoin de faire quelque chose quand l'observable est complété.
      // }
    });
  }


  getAllProfile(){
    this.profileService.getAllProfile().subscribe((data: Profile[]) => {
      this.profileList = data
    });
  }




  openSuccessDialog(message : string){
    this.dialog.open(SuccessOperationComponent, {
      height : 'auto',
      width : '320px',
      data : message
    });
  }


  openErrorDialog(message : string){
    this.dialog.open(EchecOperationComponent, {
      height : 'auto',
      width : '320px',
      data : message
    });
  }
}
