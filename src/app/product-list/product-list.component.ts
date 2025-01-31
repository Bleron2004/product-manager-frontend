import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Für *ngIf, *ngFor und Pipes
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
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
  displayedColumns: string[] = ['id', 'name', 'price'];
  message: string = '';

  constructor(private apiService: ApiService) {}

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
}
