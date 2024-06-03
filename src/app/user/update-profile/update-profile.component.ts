import { ProfileService } from './../services/profile.service';
import { Component, Inject } from '@angular/core';
import { Profile } from '../models/profile.model';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { SuccessOperationComponent } from '../../core/success-operation/success-operation.component';
import { EchecOperationComponent } from '../../core/echec-operation/echec-operation.component';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrl: './update-profile.component.css'
})
export class UpdateProfileComponent {

  constructor(
    private ProfileService : ProfileService,
    @Inject(MAT_DIALOG_DATA) public data : Profile,
    public dialog: MatDialog,){}



  profileForm : Profile = {
    profileId : this.data.profileId,
    profile : this.data.profile,
    description : this.data.description
  }

  onSubmitForm(form : NgForm) {
    if(form.valid){
      this.profileForm.profileId = this.data.profileId
      this.profileForm.profile = this.data.profile
      this.profileForm.description = form.value.description
      this.updateProfile();
    }
  }


  updateProfile(){
    this.dialog.closeAll();
    this.ProfileService.updateProfile(this.profileForm).subscribe({
      next : (response : any ) => {
        this.openSuccessDialog("Les modifications ont été enregistrées avec succès.");
      },

      error : (error : any ) =>{
        this.openErrorDialog(`La mise à jour du profile ${this.data.profile} a échoué.`);
      }
    })
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
