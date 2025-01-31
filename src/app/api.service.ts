import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://294.cyrotech.ch';

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  register(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/register`, data);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/login`, { email, password });
  }

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/categories`, { headers: this.getAuthHeaders() });
  }

  getCategoryById(categoryId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/categories/${categoryId}`, { headers: this.getAuthHeaders() });
  }

  updateCategory(category: { id: number; name: string }): Observable<any> {
    return this.http.put(`${this.apiUrl}/categories/${category.id}`, category, { headers: this.getAuthHeaders() });
  }

  deleteCategory(categoryId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/categories/${categoryId}`, { headers: this.getAuthHeaders() });
  }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/products`, { headers: this.getAuthHeaders() });
  }

  getProductById(productId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/products/${productId}`, { headers: this.getAuthHeaders() });
  }

  updateProduct(product: { id: number; name: string; price: number; image: string }): Observable<any> {
    return this.http.put(`${this.apiUrl}/products/${product.id}`, product, { headers: this.getAuthHeaders() });
  }

  deleteProduct(productId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/products/${productId}`, { headers: this.getAuthHeaders() });
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users`, { headers: this.getAuthHeaders() });
  }

  promoteUserToAdmin(userId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/${userId}/promote`, {}, { headers: this.getAuthHeaders() });
  }

  createProduct(product: { name: string; price: number; image: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/products`, product, { headers: this.getAuthHeaders() });
  }

  createCategory(category: { name: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/categories`, category, { headers: this.getAuthHeaders() });
  }
}
