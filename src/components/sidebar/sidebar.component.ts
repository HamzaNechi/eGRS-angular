import { Component, Input, computed, signal } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



export type MenuItem = {
  icon : string;
  label : string;
  route? : any
}


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatListModule,MatIconModule, CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})


export class SidebarComponent {

  sideNavCollapsed = signal(false);

  @Input() set collapsed(val: boolean){
    this.sideNavCollapsed.set(val);
  }





  menuItems = signal<MenuItem[]>([
    {
      icon : 'dashboard',
      label : 'Dashboard',
      route : 'dashboard'
    },
    {
      icon : 'supervisor_account',
      label : 'Comptes',
      route : 'compte'
    },
    {
      icon : 'place',
      label : 'Sites',
      route : 'site'
    },
    {
      icon : 'list_alt',
      label : 'Visites',
      route : 'visite'
    },
  ]);


  profilePicSize = computed(() => this.sideNavCollapsed() ? '32' : '100');
}
