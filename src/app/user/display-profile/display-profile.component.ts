import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Profile } from '../models/profile.model';
import { MatDialog } from '@angular/material/dialog';
import { AskForDeleteComponent } from '../../core/ask-for-delete/ask-for-delete.component';
import { EchecOperationComponent } from '../../core/echec-operation/echec-operation.component';
import { UpdateProfileComponent } from '../update-profile/update-profile.component';

@Component({
  selector: 'app-display-profile',
  templateUrl: './display-profile.component.html',
  styleUrl: './display-profile.component.css'
})
export class DisplayProfileComponent implements  OnInit{

  displayedColumns: string[] = ['Profile', 'Description', 'Actions'];
  profileList : Profile[] = [];


  constructor(
    private profileService : ProfileService,
    public dialog: MatDialog,
  ){}



  ngOnInit(): void {
    this.getAllProfile();
  }


  getAllProfile(){
    this.profileService.getAllProfile().subscribe((data: Profile[]) => {
      this.profileList = data
    });
  }




  openDialogUpdateProfile(profile : Profile) {
    const dialogRef = this.dialog.open(UpdateProfileComponent, {
      height: 'auto',
      width: '40vw',
      data : profile
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllProfile();
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
