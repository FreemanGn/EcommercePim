import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastEvokeService } from '@costlydeveloper/ngx-awesome-popup';
import { Category } from 'src/app/models/category';
import { CategoryPost } from 'src/app/models/categoryPost';
import { CategoryService } from 'src/app/services/category-service/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent {

  
  selectedCategory: Category | null = null;
  newCategory: boolean = false;
  categories: Category[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private categoryService:CategoryService,
    private route: Router,
    private toastEvokeService: ToastEvokeService
    ) { }

    categoryForm: FormGroup = this.formBuilder.group({
      categoryName : [''],
      categoryDescription: [''],
      categoryImage: ['URL'],
      productCategory: [''],
    })

    //Submit the category

    onSubmit() {
      const category : CategoryPost = {
        name : this.categoryForm.value.categoryName,
        description : this.categoryForm.value.categoryDescription,
        image : this.categoryForm.value.categoryImg,
        productId: this.categoryForm.value.productCategory
      };
  
      this.categoryService.addCategory(category).subscribe({
        next : (category : Category) => {
          this.toastEvokeService.success('Succes', 'category created succefuly').subscribe();
          this.route.navigate(['/category']);
        },
        error : (err : any) => {
          console.log(err);
        }
      });
    }




}
