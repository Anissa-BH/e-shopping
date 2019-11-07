import { Component, OnInit } from '@angular/core';
import { ProductCart } from 'src/app/models/productCart';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: any;
  cartCounter : number = 0;
  totalPrice : number = 0;

  constructor(private productsService: ProductsService) { }

  ngOnInit() { 
    this.createCart();
  }

  createCart(): void {
    const products = JSON.parse(localStorage.getItem('products'));
    if (products) {
      this.cart = [];
      // Initialiser le total à 0
      this.cartCounter = 0;
      this.totalPrice = 0;
      // Parcourir le tableau d'attributs
      Object.keys(products).forEach(prodId => {
        // Récuprer les caractèristiques du produit
        const product = this.productsService.getProductById(parseInt(prodId));
        if (product) {
          // Ajouter la quantité de produits au total
          this.cartCounter += products[prodId];
          // Mettre à jour la quanité de produits
          product.quantity = products[prodId];
          // Mettre à jour le total prix
          this.totalPrice +=  product.price * product.quantity;
          this.cart.push(product);
        }
      });
    }
  }

  removeItem(product){
    let products = JSON.parse(localStorage.getItem('products'));
    delete products[product.id];
    localStorage.setItem('products',JSON.stringify(products));
    this.createCart();
    this.productsService.updateCartInfo();
  }
}
