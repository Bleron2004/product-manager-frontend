import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const token = localStorage.getItem('token');

    if (token) {
      try {
        const parsedToken = JSON.parse(atob(token.split('.')[1]));
        const isExpired = parsedToken.exp * 1000 < Date.now();

        if (isExpired) {
          this.router.navigate(['/auth']);
          return false;
        }

        return true;
      } catch {
        this.router.navigate(['/auth']);
        return false;
      }
    }

    this.router.navigate(['/auth']);
    return false;
  }
}
