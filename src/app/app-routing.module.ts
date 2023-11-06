import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './views/category/category-list/category-list.component';
import { ProductListComponent } from './views/product/product-list/product-list.component';
import { ProductAddComponent } from './views/product/product-add/product-add.component';
import { CategoryAddComponent } from './views/category/category-add/category-add.component';

const routes: Routes = [
  {path: 'category-list', component: CategoryListComponent},
  {path: 'product', component: ProductListComponent},
  {path: 'product/add', component: ProductAddComponent},
  {path: 'category/add', component: CategoryAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
