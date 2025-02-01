import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule], // Fügt CommonModule hinzu, um Pipes wie currency zu verwenden
  template: `
    <div class="product-details-container">
      <h1>{{ product.name }}</h1>
      <img [src]="product.image" alt="Produktbild" />
      <p>{{ product.description }}</p>
      <p>Preis: {{ product.price | currency:'EUR' }}</p>
    </div>
  `,
  styles: [
    `
      .product-details-container {
        text-align: center;
        padding: 20px;
      }
      img {
        max-width: 300px;
        border-radius: 8px;
        margin: 20px 0;
      }
    `,
  ],
})
export class ProductDetailsComponent implements OnInit {
  product: any = {};

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.apiService.getProductById(id).subscribe(
      (data) => {
        this.product = data;
      },
      (error) => {
        console.error('Fehler beim Laden des Produkts:', error);
      }
    );
  }
}
