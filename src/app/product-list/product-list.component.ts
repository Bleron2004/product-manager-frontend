import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  displayedColumns: string[] = ['image', 'name', 'price', 'actions'];
  message: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.apiService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        this.message = 'Fehler beim Laden der Produkte.';
        console.error(error);
      }
    );
  }

  editProduct(productId: number): void {
    this.router.navigate(['/products/edit', productId]);
  }

  viewDetails(productId: number): void {
    this.router.navigate(['/products/details', productId]);
  }
}
