import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<mat-toolbar color="primary">
      <span>Angular Prerender Test</span>
      <span class="spacer"></span>
      <button
        mat-button
        routerLink=""
        routerLinkActive="active-link"
        [routerLinkActiveOptions]="{ exact: true }"
      >
        Home
        <mat-icon>home</mat-icon>
      </button>
      <button mat-button routerLink="/contact" routerLinkActive="active-link">
        Contact
        <mat-icon>phone</mat-icon>
      </button>
      <button
        mat-button
        routerLink="/user/JohnDoe"
        routerLinkActive="active-link"
      >
        User
        <mat-icon>face</mat-icon>
      </button>
    </mat-toolbar>
    <div class="container">
      <router-outlet></router-outlet>
    </div>`,
  styles: [
    `
      .active-link {
        background-color: white;
        color: #3f51b5;
      }
    `,
  ],
})
export class AppComponent {}
