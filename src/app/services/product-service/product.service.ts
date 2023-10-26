import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';


const API_URL = environment.API_URL;
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }


  getAllProducts() : Observable<Product[]> {
    return this.http.get<Product[]>(API_URL + '/Product');
  }
}
