import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot} from '@angular/router';
import {jwtDecode} from 'jwt-decode';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardAdmin implements CanActivate {
  constructor(private router: Router,
              private matSnackBar: MatSnackBar) {
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const token = localStorage.getItem('token');

    console.log(token);

    if (token) {
      try {
        const parsedToken = JSON.parse(atob(token.split('.')[1]));
        const isExpired = parsedToken.exp * 1000 < Date.now();

        const decodedJwt: any = jwtDecode(token);

        if (decodedJwt) {
          if (!decodedJwt.roles.includes('admin')) {
            //  durch diesen auth. können leute die nicht eingeloggt sind keine sachen bearbeiten
            this.matSnackBar.open("Du darfst diese Seite nicht betreten!", "OK", {duration: 2000});
            return false;
          }
          console.log(decodedJwt);
          console.log(decodedJwt.roles);
        }

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
