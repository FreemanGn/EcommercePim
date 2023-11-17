import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductPost } from 'src/app/models/productPost';


const API_URL = environment.API_URL;
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }


  getAllProducts() : Observable<Product[]> {
    return this.http.get<Product[]>(API_URL + '/Product');
  }
  getProductById(id: number) : Observable<Product> {
    return this.http.get<Product>(API_URL + '/Product/' + id);
  }

  addProduct(product: ProductPost) : Observable<Product> {
    return this.http.post<Product>(API_URL + '/Product', product);
  }

  deleteProduct(id: number) : Observable<number> {
    return this.http.delete<number>(API_URL + '/Product/' + id);
  }
  updateProduct(product: Product) : Observable<Product> {
    return this.http.put<Product>(API_URL + '/Product/' + product.id, product);
  }
}
