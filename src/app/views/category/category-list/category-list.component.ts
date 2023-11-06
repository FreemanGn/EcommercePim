import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category-service/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {

  categories: Category[] = [];

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getAllCategories();

  }


  private getAllCategories() {
    this.categoryService.getAllCategories().subscribe({
      next : (categories : Category[]) => {
        this.categories = categories;
        console.log(this.categories)
      }
    });
  }
}
