import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MainComponent } from './main/main.component';
import { CategoryListComponent } from './views/category/category-list/category-list.component';
import { ProductListComponent } from './views/product/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductAddComponent } from './views/product/product-add/product-add.component';
import { CategoryAddComponent } from './views/category/category-add/category-add.component';
import { CategoryEditComponent } from './views/category/category-edit/category-edit.component';
import { CategoryDeleteComponent } from './views/category/category-delete/category-delete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    MainComponent,
    CategoryListComponent,
    ProductListComponent,
    ProductAddComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    CategoryDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
