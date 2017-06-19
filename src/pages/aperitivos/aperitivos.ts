import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ProductoPage } from '../producto/producto';

import { Aperitivos } from '../../providers/aperitivos';
/*
  Generated class for the Aperitivos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-aperitivos',
  templateUrl: 'aperitivos.html',
  providers: [Aperitivos]
})
export class AperitivosPage {
    varios: Array<{title: string, photo: string, description: string, price: any}>;
    constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                private aperitivosProvider: Aperitivos) {

      /* Entradas - Borde del rio */
      this.varios = this.aperitivosProvider.data;
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
