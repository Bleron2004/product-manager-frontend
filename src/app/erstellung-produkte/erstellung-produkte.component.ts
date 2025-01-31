import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-erstellung-produkte',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './erstellung-produkte.component.html',
  styleUrls: ['./erstellung-produkte.component.scss'],
})
export class ErstellungProdukteComponent {
  name: string = '';
  price: number = 0;
  image: string = '';
  message: string = '';

  constructor(private apiService: ApiService) {}

  createProduct() {
    const product = { name: this.name, price: this.price, image: this.image };
    this.apiService.createProduct(product).subscribe(
      () => {
        this.message = 'Produkt erfolgreich erstellt.';
        this.clearForm();
      },
      (error) => {
        this.message = 'Fehler beim Erstellen des Produkts.';
        console.error(error);
      }
    );
  }

  clearForm() {
    this.name = '';
    this.price = 0;
    this.image = '';
  }
}
