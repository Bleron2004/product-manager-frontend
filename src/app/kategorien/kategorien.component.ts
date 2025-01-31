import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kategorien',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule],
  templateUrl: './kategorien.component.html',
  styleUrls: ['./kategorien.component.scss'],
})
export class KategorienComponent implements OnInit {
  categories: any[] = [];
  displayedColumns: string[] = ['id', 'name', 'actions'];
  message: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.apiService.getCategories().subscribe(
      (data) => {
        this.categories = data;
      },
      () => {
        this.message = 'Fehler beim Laden der Kategorien.';
      }
    );
  }

  editCategory(id: number): void {
    this.router.navigate(['/kategorien/edit', id]);
  }

  deleteCategory(id: number): void {
    this.apiService.deleteCategory(id).subscribe(
      () => {
        this.loadCategories();
      },
      () => {
        this.message = 'Fehler beim Löschen der Kategorie.';
      }
    );
  }
}
