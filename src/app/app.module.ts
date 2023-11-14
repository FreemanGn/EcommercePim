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
import { ReactiveFormsModule } from '@angular/forms';
import {
  NgxAwesomePopupModule,
  DialogConfigModule,
  ConfirmBoxConfigModule,
  ToastNotificationConfigModule
} from '@costlydeveloper/ngx-awesome-popup';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    MainComponent,
    CategoryListComponent,
    ProductListComponent,
    ProductAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxAwesomePopupModule.forRoot(), // Essential, mandatory main module.
    DialogConfigModule.forRoot(), // Needed for instantiating dynamic components.
    ConfirmBoxConfigModule.forRoot(), // Needed for instantiating confirm boxes.
    ToastNotificationConfigModule.forRoot() // Needed for instantiating toast notifications.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
