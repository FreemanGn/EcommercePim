import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastEvokeService } from '@costlydeveloper/ngx-awesome-popup';
import { Product } from 'src/app/models/product';
import { ProductPost } from 'src/app/models/productPost';
import { ProductService } from 'src/app/services/product-service/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {

  constructor(
    private formBuilder: FormBuilder,
    private productService : ProductService,
    private route : Router,
    private toastEvokeService: ToastEvokeService
    ) { }

  // product from
  productForm : FormGroup = this.formBuilder.group({
    productName : [''],
    productDescription : [''],
    productPrice : [''],
    productSku : [''],
    productSize : [''],
    productCategory : [''],
    productImg : ['URL'],
  });

// function to submit product
  onSubmit() {
    const product : ProductPost = {
      name : this.productForm.value.productName,
      description : this.productForm.value.productDescription,
      price : this.productForm.value.productPrice,
      image : this.productForm.value.productImg,
      sku : this.productForm.value.productSku,
      size : this.productForm.value.productSize,
      categoryId : this.productForm.value.productCategory,
    };

    this.productService.addProduct(product).subscribe({
      next : (product : Product) => {
        this.toastEvokeService.success('Succes', 'Product created succefuly').subscribe();
        this.route.navigate(['/product']);
      },
      error : (err : any) => {
        console.log(err);
      }
    });
  }

}
