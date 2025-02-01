import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-erstellung-kategorie',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './erstellung-kategorie.component.html',
  styleUrls: ['./erstellung-kategorie.component.scss'],
})
export class ErstellungKategorieComponent {
  name: string = '';
  message: string = '';

  constructor(private apiService: ApiService) {
  }

  createCategory() {
    const category = {name: this.name, active: true};
    this.apiService.createCategory(category).subscribe(
      () => {
        this.message = 'Kategorie erfolgreich erstellt.';
        this.clearForm();
      },
      (error) => {
        this.message = 'Fehler beim Erstellen der Kategorie.';
        console.error(error);
      }
    );
  }

  clearForm() {
    this.name = '';
  }
}
