import { Component } from '@angular/core';
import { UserModel } from '../models/user.model';
import { UserService } from '../services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { AskForDeleteComponent } from '../../core/ask-for-delete/ask-for-delete.component';
import { CreateComponent } from '../create/create.component';
import { SuccessOperationComponent } from '../../core/success-operation/success-operation.component';
import { EchecOperationComponent } from '../../core/echec-operation/echec-operation.component';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class UserIndexComponent {
  displayedColumns: string[] = ['Login', 'Nom', 'Role','Status', 'Email','Actions'];
  dataSource : UserModel[] = [];

  page: number = 0;
  size: number = 5;
  totalPages : number = 0;
  pages : number[] = [];


  searchName = '';

  constructor(
    public dialog: MatDialog,
    private userService:UserService
  ) {}


  ngOnInit(): void {
    this.refreshUserList();
  }




  openDialogDelete(login: string) {
    const dialogRef = this.dialog.open(AskForDeleteComponent, {
      height: 'auto',
      width: '320px',
      data : `Êtes-vous sûr de vouloir supprimer ${login} ?`
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if(result){
        this.deleteUser(login);
      }
    });
  }


  openDialogAddUser() {
    const dialogRef = this.dialog.open(CreateComponent, {
      height: 'auto',
      width: '40vw',
    });
  }



  openDialogUpdateUser(user : UserModel) {
    const dialogRef = this.dialog.open(UpdateComponent, {
      height: 'auto',
      width: '40vw',
      data : user
    });

    dialogRef.afterClosed().subscribe(result => {
      this.refreshUserList();
    });
  }



  //crud user
  deleteUser(login : string){
    this.userService.deleteUser(login).subscribe(
      (result : any) => {
        this.dialog.closeAll();
        if(result.body === 1){
          this.dialog.open(SuccessOperationComponent, {
            height : 'auto',
            width : '320px',
            data : 'La suppression a été effectuée avec succès'
          });
          this.refreshUserList();
        }else{
          this.dialog.open(EchecOperationComponent, {
            height : 'auto',
            width : '320px',
            data : "La suppression de l'utilisateur a échoué."
          });
        }
      }
    );
  }




  searchUserByLogin(){
    if(this.searchName != ''){
      this.userService.searchUserByLogin(this.page,this.size, this.searchName).subscribe((data: any)=>{
        this.dataSource = data.body.content;
        this.pages= Array.from({ length: data.body.numberOfElements <= 5 ? 1 : data.body.numberOfElements /5 }, (_, i) => i+1);
      });
    }else{
      this.page = 0
      this.pages = [];
      this.totalPages = 0;
      this.refreshUserList();
    }

  }


  refreshUserList(){
    this.userService.getAllUsers(this.page,this.size).subscribe((data: any)=>{
      this.dataSource = data.body.content;
      this.pages= Array.from({ length: data.body.totalPages }, (_, i) => i+1);
    });
  }




  //pagination

  indexPage(index: number){
    this.page= index;
    if(this.searchName === ''){
      this.refreshUserList();
    }else{
      this.searchUserByLogin();
    }

  }


  previousPage() {
    if (this.page > 0) {
      this.page--;
      if(this.searchName === ''){
        this.refreshUserList();
      }else{
        this.searchUserByLogin();
      }
    }
  }

  nextPage() {
    if (this.page < this.dataSource.length - 1) {
      this.page++;
      if(this.searchName === ''){
        this.refreshUserList();
      }else{
        this.searchUserByLogin();
      }
    }
  }
}
