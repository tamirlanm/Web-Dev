import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styles: [ './app.component.css'],
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule]
})
export class AppComponent {
  title = 'Job Portal';
}