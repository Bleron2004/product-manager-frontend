import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-benutzerliste',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule],
  templateUrl: './benutzerliste.component.html',
  styleUrls: ['./benutzerliste.component.scss'],
})
export class BenutzerlisteComponent {
  users: any[] = [];
  message: string = '';

  constructor(private apiService: ApiService) {
    this.loadUsers();
  }

  loadUsers() {
    this.apiService.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        this.message = 'Fehler beim Laden der Benutzerliste.';
      }
    );
  }

  promoteToAdmin(userId: number) {
    this.apiService.promoteUserToAdmin(userId).subscribe(
      () => {
        this.message = 'Benutzer erfolgreich zum Admin gemacht.';
        this.loadUsers();
      },
      () => {
        this.message = 'Fehler beim Befördern des Benutzers.';
      }
    );
  }
}
