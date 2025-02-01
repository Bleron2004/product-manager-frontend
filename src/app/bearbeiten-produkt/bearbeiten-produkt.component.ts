import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table'; // Import hinzugefügt
import { RouterModule } from '@angular/router'; // RouterModule für routerLink

@Component({
  selector: 'app-bearbeiten-produkt',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    RouterModule
  ],
  templateUrl: './bearbeiten-produkt.component.html',
  styleUrls: ['./bearbeiten-produkt.component.scss'],
})
export class BearbeitenProduktComponent implements OnInit {
  product = {
    id: 0,
    name: '',
    price: 0,
    image: ''
  };

  originalProduct: any = {};

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.apiService.getProductById(id).subscribe(
      (data) => {
        this.product = { ...data }; // Aktuelles Produkt
        this.originalProduct = { ...data }; // Original speichern
      },
      (error) => {
        console.error('Fehler beim Laden des Produkts:', error);
      }
    );
  }

  onSubmit() {
    this.apiService.updateProduct(this.product).subscribe(
      () => {
        alert('Produkt erfolgreich aktualisiert!');
        this.router.navigate(['/products']);
      },
      (error) => {
        alert('Fehler beim Aktualisieren des Produkts!');
        console.error(error);
      }
    );
  }

  onDelete() {
    if (confirm('Möchtest du dieses Produkt wirklich löschen?')) {
      this.apiService.deleteProduct(this.product.id).subscribe(
        () => {
          alert('Produkt gelöscht!');
          this.router.navigate(['/products']);
        },
        (error) => {
          alert('Fehler beim Löschen des Produkts!');
          console.error(error);
        }
      );
    }
  }

  onCancel() {
    this.product = { ...this.originalProduct }; // Änderungen zurücksetzen
    this.router.navigate(['/products']); // Zurück zur Produktliste
  }
}
