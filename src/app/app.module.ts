import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingcartComponent } from 'src/app/component/shoppingcart/shoppingcart.component';
import { ProductListComponent } from 'src/app/component/shoppingcart/product-list/product-list.component';
import { SimilarListComponent } from 'src/app/component/similar-list/similar-list.component';

import { ProductItemComponent } from 'src/app/component/shoppingcart/product-list/product-item/product-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FiltersComponent } from 'src/app/component/shoppingcart/filters/filters.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from 'src/app/component/shared/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    ShoppingcartComponent,
    ProductListComponent,
    SimilarListComponent,
    ProductItemComponent,
    FiltersComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
