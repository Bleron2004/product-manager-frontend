import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://294.cyrotech.ch';

  constructor(private http: HttpClient) {}

  /**
   * Registrierung eines neuen Benutzers
   * @param data Registrierungsdaten
   * @returns Observable mit der API-Antwort
   */
  register(data: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    street: string;
    zip: string;
    city: string;
    country: string;
    phone: string;
    mobilePhone: string;
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/register`, data);
  }

  /**
   * Benutzer login
   * @param email Benutzer-E-Mail
   * @param password Benutzer-Passwort
   * @returns Observable mit der API-Antwort
   */
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/login`, { email, password });
  }

  /**
   *  Kategorien ansehen (dropdown)
   * @returns Observable mit der Kategorienliste
   */
  getCategories(): Observable<any[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<any[]>(`${this.apiUrl}/categories`, { headers });
  }

  /**
   * Abrufem von den produkten
   * @returns Observable mit der Produktliste
   */
  getProducts(): Observable<any[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<any[]>(`${this.apiUrl}/products`, { headers });
  }

  /**
   * Abrufen der benutzerliste
   * @returns Observable mit der Benutzerliste
   */
  getUsers(): Observable<any[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<any[]>(`${this.apiUrl}/users`, { headers });
  }

  /**
   * Benutzer zu Admin machen
   * @param userId ID des Benutzers
   * @returns Observable mit der API-Antwort
   */
  promoteUserToAdmin(userId: number): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.post(`${this.apiUrl}/users/${userId}/promote`, {}, { headers });
  }

  /**
   * Produkt erstellen
   * @param product Produktdetails
   * @returns Observable mit der API-Antwort
   */
  createProduct(product: { name: string; price: number; image: string }): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.post(`${this.apiUrl}/products`, product, { headers });
  }

  /**
   * Kategorie erstellen
   * @param category Kategoriename
   * @returns Observable mit der API-Antwort
   */
  createCategory(category: { name: string }): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.post(`${this.apiUrl}/categories`, category, { headers });
  }

  /**
   * Hilfsmethode: Authentifizierungs-Header generieren
   */
  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }
}
