import { Injectable } from '@angular/core';
import { Category } from 'src/app/models/category';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CategoryPost } from 'src/app/models/categoryPost';

const API_URL = environment.API_URL;
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }


  getAllCategories() : Observable<Category[]> {
    return this.http.get<Category[]>(API_URL + '/Category');
  }
  // Get a category by ID
  getCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(`${API_URL}/Category/${id}`);
  }

  // Create a new category
  addCategory(newCategory: CategoryPost): Observable<Category> {
    return this.http.post<Category>(API_URL + '/Category', newCategory);
  }

  // Update an existing category
  updateCategory(updatedCategory: Category): Observable<Category> {
    return this.http.put<Category>(`${API_URL}/Category/${updatedCategory.id}`, updatedCategory);
  }

  // Delete a category by ID
  deleteCategory(categoryId: number): Observable<number> {
    return this.http.delete<number>(`${API_URL}/Category/${categoryId}`);
  }

}
