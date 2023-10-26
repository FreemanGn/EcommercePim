import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product-service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getAllProducts();

  }

  private getAllProducts() {
    this.productService.getAllProducts().subscribe({
      next : (products : Product[]) => {
        this.products = products;
        console.log(this.products)
      }
    });
  }

}
