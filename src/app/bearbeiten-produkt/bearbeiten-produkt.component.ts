import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'pm-bearbeiten-produkt',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './bearbeiten-produkt.component.html',
  styleUrls: ['./bearbeiten-produkt.component.scss']
})
export class BearbeitenProduktComponent implements OnInit {
  product = { id: 0, name: '', price: 0, image: '' };

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.apiService.getProductById(id).subscribe(
      (product) => {
        this.product = product;
      },
      (error) => {
        console.error('Fehler beim Laden des Produkts:', error);
      }
    );
  }

  onSubmit() {
    this.apiService.updateProduct(this.product).subscribe(() => {
      this.router.navigate(['/products']);
    });
  }

  onDelete() {
    if (confirm('Möchtest du dieses Produkt wirklich löschen?')) {
      this.apiService.deleteProduct(this.product.id).subscribe(() => {
        this.router.navigate(['/products']);
      });
    }
  }
}
