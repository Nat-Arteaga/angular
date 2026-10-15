import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <h2>Iniciar Sesión</h2>
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
      <div>
        <label>Correo electrónico:</label><br>
        <input type="email" formControlName="email">
        <div *ngIf="loginForm.get('email')?.invalid && loginForm.get('email')?.touched" style="color: red; font-size: 12px;">
          Ingrese un correo válido.
        </div>
      </div>
      <br>
      <div>
        <label>Contraseña:</label><br>
        <input type="password" formControlName="password">
        <div *ngIf="loginForm.get('password')?.invalid && loginForm.get('password')?.touched" style="color: red; font-size: 12px;">
          La contraseña debe tener al menos 6 caracteres.
        </div>
      </div>
      <br>
      <button type="submit" [disabled]="loginForm.invalid">Ingresar</button>
    </form>
  `,
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      alert('¡Formulario válido!');
    }
  }
}
