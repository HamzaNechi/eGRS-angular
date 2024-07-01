import { Component, Input, computed, signal } from '@angular/core';


export type MenuItem = {
  icon : string;
  label : string;
  route? : any
}



@Component({
  selector: 'app-sidebar',
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
      route : 'user'
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
    {
      icon : 'notifications',
      label : 'Alerts',
      route : 'alerts'
    },
    {
      icon : 'announcement',
      label : 'Réclamations',
      route : 'reclamation'
    },
  ]);


  profilePicSize = computed(() => this.sideNavCollapsed() ? '62' : '130');
}
