import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  products: Array<Product> = [{
    id: 1,
    name: "montre",
    description: "Montre",
    price: 150,
    image: "assets/images/product/montre.jpg",
    category: 'Accessoires'
  },

  {
    id: 2,
    name: "sac",
    description: "Bandoulière",
    price: 50,
    image: "assets/images/product/sac.jpg",
    category: 'Sacs'
  },

  {
    id: 3,
    name: "bottes",
    description: "Bottes",
    price: 200,
    image: "assets/images/product/bottine3.jpg",
    category: 'Chaussures'
  },

  {
    id: 4,
    name: "sac",
    description: "Sac",
    price: 175,
    image: "assets/images/product/sac2.jpg",
    category: 'Accessoires'
  },
  {
    id: 5,
    name: "derby",
    description: "Derbies",
    price: 190,
    image: "assets/images/product/derby.jpg",
    category: 'Chaussures'
  },
  {
    id: 6,
    name: "Botte",
    description: "Botte en cuir",
    price: 250,
    image: "assets/images/product/bottes.jpg",
    category: 'Chaussures'
  },
  {
    id: 7,
    name: "Bottines",
    description: "Bottines en cuir",
    price: 275,
    image: "assets/images/product/bottines.jpg",
    category: 'Chaussures'
  },
  {
    id: 8,
    name: "Casquette",
    description: "Casquette Des années 40",
    price: 290,
    image: "assets/images/product/casquette.jpg",
    category: 'Accessoires'
  },
  {
    id: 9,
    name: "Ceinture",
    description: "Ceinture en cuir",
    price: 90,
    image: "assets/images/product/ceinture.jpg",
    category: 'Accessoires'
  },
  {
    id: 9,
    name: "Bottines",
    description: "Bottines en cuir",
    price: 380,
    image: "assets/images/product/bottines2.jpg",
    category: 'Chaussures'
  },
  {
    id: 10,
    name: "Chapeau",
    description: "Chapeau en cuir",
    price: 100,
    image: "assets/images/product/chapeau3.jpg",
    category: 'Accessoires'
  },
  {
    id: 11,
    name: "Etui lunette",
    description: "Etui lunette en cuir",
    price: 65,
    image: "assets/images/product/etui lunette4.jpg",
    category: 'Accessoires'
  },
  {
    id: 12,
    name: "Montre",
    description: "Montre en cuir",
    price: 65,
    image: "assets/images/product/montre3.jpg",
    category: 'Accessoire'
  },
  {
    id: 13,
    name: "Mallette",
    description: "Malette en cuir trés originale / Antique",
    price: 400,
    image: "assets/images/product/mallette.jpg",
    category: 'Sacs'
  },
  {
    id: 14,
    name: "Mocassin",
    description: "Mocassin",
    price: 240,
    image: "assets/images/product/mocassin2.jpg",
    category: 'Chaussures'
  },
  {
    id: 15,
    name: "Chapeau",
    description: "Chapeau",
    price: 120,
    image: "assets/images/product/chapeau.jpg",
    category: 'Accessoires'
  },
  {
    id: 16,
    name: "Chaussure",
    description: "Chaussure en cuir",
    price: 255,
    image: "assets/images/product/chaussure2.jpg",
    category: 'Chaussures'
  },
  {
    id: 17,
    name: "Pochette",
    description: "Pochette en cuir",
    price: 45,
    image: "assets/images/product/pochette.jpg",
    category: 'Accessoires'
  },
  {
    id: 18,
    name: "Valise",
    description: "valise de cabine en cuir",
    price: 255,
    image: "assets/images/product/valise.jpg",
    category: 'sacs'
  },
  {
    id: 19,
    name: "Ceinture",
    description: "Ceinture Antique",
    price: 135,
    image: "assets/images/product/ceinture3.jpg",
    category: 'Accessoires'
  },
  {
    id: 20,
    name: "Chapeau",
    description: "chapeau Style Cowboy",
    price: 143,
    image: "assets/images/product/chapeau2.jpg",
    category: 'Accessoires'
  },
  {
    id: 21,
    name: "Ceinture",
    description: "Ceinture Originale",
    price: 70,
    image: "assets/images/product/ceinture4.jpg",
    category: 'Accessoires'
  },
  {
    id: 22,
    name: "Bandoulière",
    description: "Bandoulière Antique",
    price: 180,
    image: "assets/images/product/sac4.jpg",
    category: 'Accessoires'
  },
  {
    id: 23,
    name: "Montre",
    description: "Montre en cuir",
    price: 700,
    image: "assets/images/product/montre2.jpg",
    category: 'Accessoires'
  },
  {
    id: 24,
    name: "Bandoulière",
    description: "Bandoulière en cuir",
    price: 115,
    image: "assets/images/product/sac6.jpg",
    category: 'Sacs'
  },
  {
    id: 25,
    name: "Porte-feuille",
    description: "Porte-feuille en cuir",
    price: 42,
    image: "assets/images/product/portefeuille2.jpg",
    category: 'Accessoires'
  },
  {
    id: 26,
    name: "Etui lunette",
    description: "Etui lunette de luxe",
    price: 66,
    image: "assets/images/product/etui lunette5.jpg",
    category: 'Accessoires'
  },
  {
    id: 27,
    name: "Mocassin",
    description: "Mocassin Confortable / Souple",
    price: 220,
    image: "assets/images/product/mocassin.jpg",
    category: 'Chaussures'
  },
  {
    id: 28,
    name: "Sac à dos",
    description: "Sac à dos",
    price: 105,
    image: "assets/images/product/sac a dos.jpg",
    category: 'Sacs'
  },
  {
    id: 29,
    name: "Sac",
    description: "Sac en cuir trés pratique pour les vacances",
    price: 115,
    image: "assets/images/product/sac5.jpg",
    category: 'Sacs'
  },
  {
    id: 30,
    name: "Ceinture",
    description: "Ceinture en cuir trés originale",
    price: 135,
    image: "assets/images/product/ceinture2.jpg",
    category: 'Accessoires'
  },
  {
    id: 31,
    name: "Etui lunette",
    description: "Etui lunette",
    price: 135,
    image: "assets/images/product/etui lunette3.jpg",
    category: 'Accessoires'
  },
  ]
  constructor() {

  }

  private cartInfo = new BehaviorSubject({});
  cartInfo$ = this.cartInfo.asObservable();

  updateCartInfo() {
    this.cartInfo.next({});
  }

  public getProducts(): Observable<Product[]> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(this.products);
      }, 200);
    });
  }

  /*
  * Filter retourne le résultat qui corréspond au critère de recherche
  * retourne un tableau
  */
  getProductById(id: number): any {
    const result = this.products.filter(o => o.id == id);
    return result.length > 0 ? result[0] : false;
  }
  
  isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
  }

  canActivate(): boolean {
    const products = JSON.parse(localStorage.getItem('products'));
    return !(products === null || this.isEmpty(products));
  }

}
