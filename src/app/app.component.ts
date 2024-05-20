import { CommonModule } from '@angular/common';
import { Component, computed, signal, ViewChild, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { MatMenuTrigger, MatMenuModule } from '@angular/material/menu';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    SidebarComponent,
    MatMenuModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'eGRS';

  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  collapsed = signal(false);
  mobileQuery: MediaQueryList;

  constructor(private media: MediaMatcher, private cdr: ChangeDetectorRef) {
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
}
