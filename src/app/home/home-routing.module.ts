import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from '../dashboard/index/index.component';

const routes: Routes = [
  { path: '', redirectTo: 'home/index', pathMatch: 'full'},
  { path: 'home/index', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
