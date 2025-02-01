import {Routes} from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProductListComponent} from './product-list/product-list.component';
import {KategorienComponent} from './kategorien/kategorien.component';
import {BenutzerlisteComponent} from './benutzerliste/benutzerliste.component';
import {AuthGuard} from './auth.guard';
import {ErstellungProdukteComponent} from './erstellung-produkte/erstellung-produkte.component';
import {ErstellungKategorieComponent} from './erstellung-kategorie/erstellung-kategorie.component';
import {BearbeitenProduktComponent} from './bearbeiten-produkt/bearbeiten-produkt.component';
import {BearbeitenKategorieComponent} from './bearbeiten-kategorie/bearbeiten-kategorie.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {AuthGuardAdmin} from './authadmin.guard';


export const routes: Routes = [
  {path: 'auth', component: AuthComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'products/edit/:id', component: BearbeitenProduktComponent, canActivate: [AuthGuardAdmin]},
  {path: 'kategorien', component: KategorienComponent},
  {path: 'kategorien/edit/:id', component: BearbeitenKategorieComponent, canActivate: [AuthGuardAdmin]},
  {path: 'benutzerliste', component: BenutzerlisteComponent, canActivate: [AuthGuardAdmin]},
  {path: 'erstellung-produkte', component: ErstellungProdukteComponent, canActivate: [AuthGuardAdmin]},
  {path: 'erstellung-kategorie', component: ErstellungKategorieComponent, canActivate: [AuthGuardAdmin]},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'products/details/:id', component: ProductDetailsComponent},
  {path: '**', redirectTo: '/dashboard'},
];
