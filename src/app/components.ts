import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav style="background: #2c3e50; padding: 1rem; color: white;">
      <a routerLink="/" style="color: white; margin-right: 15px; text-decoration: none;">Inicio</a>
      <a routerLink="/acerca" style="color: white; margin-right: 15px; text-decoration: none;">Acerca de</a>
      <a routerLink="/login" style="color: white; text-decoration: none;">Login</a>
    </nav>
    
    <div style="padding: 20px;">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {}
