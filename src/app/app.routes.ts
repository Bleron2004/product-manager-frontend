import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductListComponent } from './product-list/product-list.component';
import { KategorienComponent } from './kategorien/kategorien.component';
import { BenutzerlisteComponent } from './benutzerliste/benutzerliste.component';
import { AuthGuard } from './auth.guard';
import { ErstellungProdukteComponent } from './erstellung-produkte/erstellung-produkte.component';
import { ErstellungKategorieComponent } from './erstellung-kategorie/erstellung-kategorie.component';
import { BearbeitenProduktComponent } from './bearbeiten-produkt/bearbeiten-produkt.component';
import { BearbeitenKategorieComponent } from './bearbeiten-kategorie/bearbeiten-kategorie.component';

export const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'products', component: ProductListComponent, canActivate: [AuthGuard] },
  { path: 'products/edit/:id', component: BearbeitenProduktComponent, canActivate: [AuthGuard] },
  { path: 'kategorien', component: KategorienComponent, canActivate: [AuthGuard] },
  { path: 'kategorien/edit/:id', component: BearbeitenKategorieComponent, canActivate: [AuthGuard] },
  { path: 'benutzerliste', component: BenutzerlisteComponent, canActivate: [AuthGuard] },
  { path: 'erstellung-produkte', component: ErstellungProdukteComponent, canActivate: [AuthGuard] },
  { path: 'erstellung-kategorie', component: ErstellungKategorieComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: '**', redirectTo: '/auth' },
];
