import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {Router} from '@angular/router';
import {ApiService} from '../api.service';
import {MatSnackBar} from '@angular/material/snack-bar';

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

  constructor(
    private apiService: ApiService,
    private router: Router,
    private matSnackbar: MatSnackBar
  ) {
  }

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
      if (!this.validatePassword()) {
        return; // Stoppe den Prozess, wenn das Passwort ungültig ist
      }

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
            console.log(response);

            this.matSnackbar.open('Registrierung erfolgreich', 'OK', {
              duration: 2000,
            });

            setTimeout(() => {
              window.location.reload();
            }, 2000);

            if (response.token) {
              localStorage.setItem('token', response.token);
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

  validateEmail() {
    if (!this.email.includes('@')) {
      this.message = 'E-Mail muss ein @ enthalten';
    } else {
      this.message = '';
    }
  }

  validatePassword(): boolean {
    const hasUppercase = /[A-Z]/.test(this.password);
    const hasNumber = /[0-9]/.test(this.password);
    const hasSpecialChar = /[+@_§#|^]/.test(this.password);
    const hasMinLength = this.password.length >= 8;
    // das sind die bedinugenn für das passwort
    if (!hasMinLength) {
      this.message = 'Das Passwort muss mindestens 8 Zeichen lang sein,einen Grossbuchstaben enthalten, eine Zahl sowie eines der folgenden Sonderzeichen enthalten: +@_§#|^';
      this.message = 'Das Passwort muss mindestens einen Großbuchstaben enthalten.';
      return false;
    } else if (!hasNumber) {
      this.message = 'Das Passwort muss mindestens eine Zahl enthalten.';
      return false;
    } else if (!hasSpecialChar) {
      this.message = 'Das Passwort muss mindestens eines der folgenden Sonderzeichen enthalten: +@_§#|^';
      return false;
    } else {
      this.message = '';
      return true;
    }
  }

  validateCountry() {
    if (this.country.length > 2) {
      this.message = 'Land darf nur 2 Zeichen haben';
    } else {
      this.message = '';
    }
  }

  isEmailValid(): boolean {
    return this.email.includes('@');
  }

  isCountryValid(): boolean {
    return this.country.length <= 2;
  }
}
