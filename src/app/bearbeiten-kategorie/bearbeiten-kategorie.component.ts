import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {ApiService} from '../api.service';

@Component({
  selector: 'pm-bearbeiten-kategorie',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './bearbeiten-kategorie.component.html',
  styleUrls: ['./bearbeiten-kategorie.component.scss'],
})
export class BearbeitenKategorieComponent implements OnInit {
  category = {id: 0, name: ''};
  originalCategory = {id: 0, name: ''};
  message = '';

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.apiService.getCategoryById(id).subscribe(
      (category) => {
        this.category = {...category};
        this.originalCategory = {...category};
      },
      (error) => {
        console.error('Fehler beim Laden der Kategorie:', error);
        this.router.navigate(['/auth']);
      }
    );
  }

  onSubmit() {
    this.apiService.updateCategory(this.category).subscribe(
      () => {
        alert('Kategorie erfolgreich aktualisiert!');
        this.router.navigate(['/kategorien']);
      },
      (error) => {
        this.message = 'Fehler beim Aktualisieren der Kategorie.';
        console.error(error);
      }
    );
  }

  onDelete() {
    if (confirm('Bist du sicher, dass du diese Kategorie löschen möchtest?')) {
      this.apiService.deleteCategory(this.category.id).subscribe(
        () => {
          alert('Kategorie erfolgreich gelöscht!');
          this.router.navigate(['/kategorien']);
        },
        (error) => {
          this.message = 'Fehler beim Löschen der Kategorie.';
          console.error(error);
        }
      );
    }
  }

  onCancel() {
    this.category = {...this.originalCategory};
    this.router.navigate(['/kategorien']);
  }
}
