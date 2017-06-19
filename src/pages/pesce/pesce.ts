import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ProductoPage } from '../producto/producto';

import { Pesce } from '../../providers/pesce';

/*
  Generated class for the Pesce page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pesce',
  templateUrl: 'pesce.html',
  providers: [Pesce]
})
export class PescePage {
  pesces: Array<{title: string, photo: string, description: string, price: any}>;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private pesce: Pesce) {
  	this.pesces = this.pesce.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PescePage');
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
