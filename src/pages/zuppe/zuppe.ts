import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ProductoPage } from '../producto/producto';

import { Zuppe } from '../../providers/zuppe';

/*
  Generated class for the Zuppe page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-zuppe',
  templateUrl: 'zuppe.html',
  providers: [Zuppe]
})
export class ZuppePage {
  zuppes: Array<{title: string, photo: string, description: string, price: any}>;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private zuppe: Zuppe) {
  	this.zuppes = this.zuppe.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ZuppePage');
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
