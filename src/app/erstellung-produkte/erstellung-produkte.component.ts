import {Component, OnInit} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ApiService} from '../api.service';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-erstellung-produkte',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    FormsModule,
    CommonModule,
    NgFor
  ],
  templateUrl: './erstellung-produkte.component.html',
  styleUrls: ['./erstellung-produkte.component.scss'],
})
export class ErstellungProdukteComponent implements OnInit {
  product = {
    sku: '',
    name: '',
    image: '',
    description: '',
    price: 0,
    stock: 0,
    categoryId: 0,
    active: true,
  };
  categories: any[] = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories() {
    this.apiService.getCategories().subscribe(
      (response: any) => {
        console.log(response);
        this.categories = response; // Passe die Struktur der API-Antwort an.
      },
      (error) => {
        console.error('Fehler beim Abrufen der Kategorien', error);
      }
    );
  }

  onSubmit() {
    this.apiService.createProduct(this.product).subscribe(
      (response) => {
        alert('Produkt erfolgreich erstellt!');
        console.log(response);
      },
      (error) => {
        alert('Fehler beim Erstellen des Produkts!');
        console.error(error);
      }
    );
  }
}
