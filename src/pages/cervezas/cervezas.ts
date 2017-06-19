import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ProductoPage } from '../producto/producto';

import { Cervezas } from '../../providers/cervezas';
/*
  Generated class for the Cervezas page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cervezas',
  templateUrl: 'cervezas.html',
  providers: [Cervezas]
})
export class CervezasPage {
    cervezas: Array<{title: string, photo: string, description: string, price: any}>;
    constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                private cervezasProvider: Cervezas) {

      /* Entradas - Borde del rio */
      this.cervezas = this.cervezasProvider.data;
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
