import { Component } from '@angular/core';
import { ConfirmBoxEvokeService } from '@costlydeveloper/ngx-awesome-popup';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category-service/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {

  categories: Category[] = [];

  constructor(
    private categoryService:CategoryService,
    private confirmBoxEvokeService: ConfirmBoxEvokeService
    ) { }

  ngOnInit(): void {
    this.getAllCategories();

  }
// function to get all categories
  private getAllCategories() {
    this.categoryService.getAllCategories().subscribe({
      next : (categories : Category[]) => {
        this.categories= categories;
      }
    });
  }
// function to delete category
  deleteCategory(id: number) {
    this.confirmBoxEvokeService.warning('Delete category', 'Are you sure , you want to delete this category', 'Confirm', 'Decline')
            .subscribe(resp => {
              if(resp.success) {
                this.categoryService.deleteCategory(id).subscribe({
                  next : () => {
                    this.getAllCategories();
                  },
                  error : (err : any) => {
                    console.log(err);
                  }
                });
              }
            });
  }

}
