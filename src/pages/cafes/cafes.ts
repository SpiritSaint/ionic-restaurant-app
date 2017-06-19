import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ProductoPage } from '../producto/producto';

/*
  Generated class for the Cafes page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cafes',
  templateUrl: 'cafes.html'
})
export class CafesPage {

    cafes: Array<{title: string, photo: string, description: string, price: any}>;
    constructor(public navCtrl: NavController, public navParams: NavParams) {

      /* Entradas - Borde del rio */
      this.cafes = [
      { 
        title: 'Café Frangelico Italiano',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 3550
      },
      { 
        title: 'Cortado',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 2750 
      },
      { 
        title: 'Café Espresso', 
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 2650
      },
      { 
        title: 'Té Importados', 
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 2200 
      },
      { 
        title: 'Capuccino', 
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 2750 
      }
      ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CafesPage');
  }

  viewProduct(product, allOfProducts) {
      this.navCtrl.push(ProductoPage, {
        title: product.title,
        photo: product.photo,
        description: product.description,
        price: product.price,
        products: allOfProducts,
      });
    }

}
