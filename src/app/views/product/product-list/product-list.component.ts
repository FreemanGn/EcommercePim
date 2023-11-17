import { Component, OnInit } from '@angular/core';
import { ConfirmBoxEvokeService, } from '@costlydeveloper/ngx-awesome-popup';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product-service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productService:ProductService,
    private confirmBoxEvokeService: ConfirmBoxEvokeService
    ) { }

  ngOnInit(): void {
    this.getAllProducts();

  }
// function to get all products
  private getAllProducts() {
    this.productService.getAllProducts().subscribe({
      next : (products : Product[]) => {
        this.products = products;
      }
    });
  }
// function to delete product
  deleteProduct(id: number) {
    this.confirmBoxEvokeService.warning('Delete Product', 'Are you sure , you want to delete this product', 'Confirm', 'Decline')
            .subscribe(resp => {
              if(resp.success) {
                this.productService.deleteProduct(id).subscribe({
                  next : () => {
                    this.getAllProducts();
                  },
                  error : (err : any) => {
                    console.log(err);
                  }
                });
              }
            });
  }


}
