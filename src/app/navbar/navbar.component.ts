import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private cartCounter: number = 0;
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.cartInfo$.subscribe(() => this.updateCart());
  }

  updateCart() {
    const products = JSON.parse(localStorage.getItem('products'));
    if (products) {
      this.cartCounter = 0;
      Object.keys(products).forEach(prodId => {
        this.cartCounter += products[prodId];
      });
    }
  }
}
