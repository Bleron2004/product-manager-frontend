import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  isLoginMode: boolean = true;
  email: string = '';
  password: string = '';
  firstName: string = '';
  lastName: string = '';
  street: string = '';
  zip: string = '';
  city: string = '';
  country: string = '';
  phone: string = '';
  mobilePhone: string = '';
  message: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
    this.message = '';
  }

  onSubmit() {
    if (this.isLoginMode) {
      this.apiService.login(this.email, this.password).subscribe(
        (response) => {
          if (response.token) {
            localStorage.setItem('token', response.token);
            this.message = 'Login erfolgreich!';
            this.router.navigate(['/dashboard']);
          } else {
            this.message = 'Kein Token erhalten!';
          }
        },
        () => {
          this.message = 'Login fehlgeschlagen!';
        }
      );
    } else {
      this.apiService
        .register({
          email: this.email,
          password: this.password,
          firstName: this.firstName,
          lastName: this.lastName,
          street: this.street,
          zip: this.zip,
          city: this.city,
          country: this.country,
          phone: this.phone,
          mobilePhone: this.mobilePhone,
        })
        .subscribe(
          (response) => {
            if (response.token) {
              localStorage.setItem('token', response.token);
              this.message = 'Registrierung erfolgreich!';
              this.router.navigate(['/dashboard']);
            } else {
              this.message = 'Kein Token erhalten!';
            }
          },
          () => {
            this.message = 'Registrierung fehlgeschlagen!';
          }
        );
    }
  }
}
