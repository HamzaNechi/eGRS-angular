import { Profile } from './../models/profile.model';
import { Component, OnInit, signal } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { NgForm } from '@angular/forms';
import { UserModel } from '../models/user.model';
import { UserService } from '../services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { SuccessOperationComponent } from '../../core/success-operation/success-operation.component';
import { EchecOperationComponent } from '../../core/echec-operation/echec-operation.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})


export class CreateComponent implements OnInit{
  profileList : Profile[] = [];


  successCreate = signal(false);


  userForm : UserModel = {
    login : '',
    email : '',
    firstName :'',
    password : '',
    isAd : 0,
    lastName : '',
    profile : {profileId : 0, profile :'', description : ''},
    status : 0
  };


  constructor(
    private profileService : ProfileService,
    private userService : UserService,
    public dialog: MatDialog,
  ){}




  ngOnInit(): void {
    this.getAllProfile();
  }




  //add user
  onSubmitForm(form : NgForm){
    if(form.valid){
      this.userForm.login = form.value.login;
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
    this.addUser();
  }
  //end add user







  addUser(){
    this.userService.addUser(this.userForm).subscribe(
      (result : any) => {
        this.dialog.closeAll();
        if(result.body.statusCode === 201){
          this.openSuccessDialog("L'utilisateur a été créé avec succès.");
        }else{
          this.openErrorDialog("L'ajout de l'utilisateur a échoué.");
        }
      }
    );
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
