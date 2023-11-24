import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastEvokeService } from '@costlydeveloper/ngx-awesome-popup';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category-service/category.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent {

  categoryId?:number;
  category : Category = {} as Category;

  constructor(
    private categoryService : CategoryService,
    private routeActive:ActivatedRoute,
    private route : Router,
    private toastEvokeService: ToastEvokeService
  ) { }

  ngOnInit(): void {
    //get id from url
    this.routeActive.params.subscribe(params => {
      this.categoryId = params['id'];
      this.category.id =  params['id'];
    });
    this.getcategoryById(this.categoryId)
  }

// function to get category by id
  getcategoryById(id:any) {
    this.categoryService.getCategoryById(id).subscribe({
      next : (category) => {
        this.category = category;
      },
      error : (err : any) => {
        console.log(err);
      }
    });
  }


// function to update category
  onSubmit() {
     this.categoryService.updateCategory(this.category).subscribe({
      next : (category : Category) => {
         this.category = category;
         this.toastEvokeService.success('Succes', 'category updated succefuly').subscribe();
         this.route.navigate(['/category']);
       },
       error : (err : any) => {
         console.log(err);
       }
     });
  }
}
