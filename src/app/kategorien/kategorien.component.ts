import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  selector: 'pm-kategorien',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kategorien.component.html',
  styleUrls: ['./kategorien.component.scss'],
})
export class KategorienComponent implements OnInit {
  categories: any[] = [];
  message: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories() {
    this.apiService.getCategories().subscribe(
      (data: any) => {
        this.categories = data;
        console.log('Kategorien geladen:', this.categories);
      },
      (error: any) => {
        this.message = 'Fehler beim Laden der Kategorien!';
        console.error('Fehler beim Abrufen der Kategorien:', error);
      }
    );
  }
}
