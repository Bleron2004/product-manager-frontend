import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    CommonModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private router: Router) {
  }

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  navigateToUserList() {
    this.router.navigate(['/benutzerliste']);
  }

  navigateToProductList() {
    this.router.navigate(['/products']);
  }

  navigateToProductCreation() {
    this.router.navigate(['/erstellung-produkte']);
  }

  navigateToCategoryList() {
    this.router.navigate(['/kategorien']);
  }

  navigateToCategoryCreation() {
    this.router.navigate(['/erstellung-kategorie']);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth']);
  }
}
