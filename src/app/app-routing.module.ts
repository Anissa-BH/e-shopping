import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { CartComponent } from './cart/cart.component';
import { ProductsService } from './services/products.service';

const routes: Routes = [
  {
    path: 'home', component: ProductsListComponent,
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'cart', component: CartComponent, canActivate:[ProductsService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
