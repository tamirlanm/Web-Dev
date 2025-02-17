import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports:[HomeComponent, RouterModule],
  template: `
  <main>
  <a [routerLink]="['/']">
    <header class="brand-name">
    <img class="brand-logo" src="https://kaspi.kz/img/Logo.svg" alt="logo" aria-hiddent="true"/>
    </header>
  </a>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
