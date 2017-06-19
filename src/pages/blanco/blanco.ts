import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ProductoPage } from '../producto/producto';

import { BlancoLates } from '../../providers/blanco-lates';
import { BlancoChardonnays } from '../../providers/blanco-chardonnays';
import { BlancoSauvignon } from '../../providers/blanco-sauvignon';
/*
  Generated class for the Blanco page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-blanco',
  templateUrl: 'blanco.html',
  providers: [
    BlancoLates,
    BlancoChardonnays,
    BlancoSauvignon
  ]
})
export class BlancoPage {
  lates: Array<{title: string, photo: string, description: string, price: any}>;
  chardonnays: Array<{title: string, photo: string, description: string, price: any}>;
  sauvignon: Array<{title: string, photo: string, description: string, price: any}>;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private blancoLatesProvider: BlancoLates,
              private blancoChardonnaysProvider: BlancoChardonnays,
              private blancoSauvignonProvider: BlancoSauvignon) {
    this.lates = this.blancoLatesProvider.data; 
    this.chardonnays = this.blancoChardonnaysProvider.data;
    this.sauvignon = this.blancoSauvignonProvider.data;
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlancoPage');
  }

}
