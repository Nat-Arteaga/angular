import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AcercaComponent } from './acerca.component';
import { LoginComponent } from './login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'acerca', component: AcercaComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];