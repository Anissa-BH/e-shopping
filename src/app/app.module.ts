import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductListMenuComponent } from './products-list/product-list-menu/product-list-menu.component';
import { ProductComponent } from './products-list/product/product.component';
import { ProductsService } from './services/products.service';
import {TruncatePipe} from 'src/app/pipes/truncate.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartComponent,
    FooterComponent,
    ProductsListComponent,
    ProductListMenuComponent,
    ProductComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
