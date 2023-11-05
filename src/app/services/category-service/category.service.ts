import { Injectable } from '@angular/core';
import { Category } from 'src/app/models/category';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const API_URL = environment.API_URL;
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }


  getAllCategories() : Observable<Category[]> {
    return this.http.get<Category[]>(API_URL + '/Category');
  }
}
