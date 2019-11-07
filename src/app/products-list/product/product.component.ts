import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  @Input() product: Product;
  @Output() onClickCount = new EventEmitter();
  
  constructor(private cartService: ProductsService) { }

  ngOnInit() {
  }

  addToCart() {
    const products = JSON.parse(localStorage.getItem('products'));
    //si l'objet products n'existe pas
    if (products === null) {
      const newProducts = {}
      //l'attribut this.product.id va prendre 1 comme valeur
      newProducts[this.product.id] = 1
      localStorage.setItem ('products',JSON.stringify(newProducts));
    }
    else {
      //si l'id n'existe pas
      if(products[this.product.id] === undefined){
        products[this.product.id] = 1;
      } else {
        products[this.product.id] ++;
      }
      localStorage.setItem('products',JSON.stringify(products));
    }
    this.cartService.updateCartInfo();
  }
}
