import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastEvokeService } from '@costlydeveloper/ngx-awesome-popup';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product-service/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {

  productId?:number;
  product : Product = {} as Product;

  constructor(
    private productService : ProductService,
    private routeActive:ActivatedRoute,
    private route : Router,
    private toastEvokeService: ToastEvokeService
  ) { }

  ngOnInit(): void {
    //get id from url
    this.routeActive.params.subscribe(params => {
      this.productId = params['id'];
      this.product.id =  params['id'];
    });
    this.getProductById(this.productId)
  }

// function to get product by id
  getProductById(id:any) {
    this.productService.getProductById(id).subscribe({
      next : (product) => {
        this.product = product;
      },
      error : (err : any) => {
        console.log(err);
      }
    });
  }

// function to change size
  onSizeChange(Size:string){
    this.product.size = Size;
  }

// function to update product
  onSubmit() {
     this.productService.updateProduct(this.product).subscribe({
      next : (product : Product) => {
         this.product = product;
         this.toastEvokeService.success('Succes', 'Product updated succefuly').subscribe();
         this.route.navigate(['/product']);
       },
       error : (err : any) => {
         console.log(err);
       }
     });
  }
}
