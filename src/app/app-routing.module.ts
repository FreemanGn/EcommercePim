import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './views/category/category-list/category-list.component';
import { ProductListComponent } from './views/product/product-list/product-list.component';

const routes: Routes = [
  {path: 'category-list', component: CategoryListComponent},
  {path: 'product', component: ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
