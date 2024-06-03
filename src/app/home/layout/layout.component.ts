import { CommonModule } from '@angular/common';
import { Component, computed, signal, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatMenuTrigger } from '@angular/material/menu';
import { MediaMatcher } from '@angular/cdk/layout';
import { AuthService } from '../../auth/auth.service';



@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  title = 'eGRS';

  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  collapsed = signal(false);
  mobileQuery: MediaQueryList;

  constructor(private media: MediaMatcher,
    private cdr: ChangeDetectorRef,
    private router :Router,
    private authService: AuthService
  ) {
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    this.mobileQuery.addListener(this.handleMobileQueryChange);
  }

  someMethod() {
    this.trigger.openMenu();
  }

  handleMobileQueryChange = () => {
    console.log('Media query changed.');
    this.collapsed.set(true);
    this.cdr.detectChanges(); // Ensure change detection is run
  }

  sidenavWidth = computed(() => this.collapsed() ? '65px' : '250px');



  onLogout(){
    this.authService.logout();
  }
}
