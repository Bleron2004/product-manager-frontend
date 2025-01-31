import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token');
    console.log('AuthGuard prüft Token:', token);

    if (token) {
      try {

        const parsedToken = JSON.parse(atob(token.split('.')[1])); // JWT-Parsing
        const isExpired = parsedToken.exp * 1000 < Date.now();
        if (isExpired) {
          console.warn('Token ist abgelaufen. Weiterleitung zur Login-Seite.');
          this.router.navigate(['/auth']);
          return false;
        }
      } catch (e) {
        console.error('Token ist ungültig:', e);
        this.router.navigate(['/auth']);
        return false;
      }
      return true;
    } else {
      console.warn('Kein Token gefunden. Weiterleitung zur Login-Seite.');
      this.router.navigate(['/auth']);
      return false;
    }
  }
}
