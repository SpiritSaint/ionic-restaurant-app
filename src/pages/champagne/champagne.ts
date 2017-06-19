import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ProductoPage } from '../producto/producto';

import { Champagnes } from '../../providers/champagnes';
/*
  Generated class for the Champagne page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-champagne',
  templateUrl: 'champagne.html',
  providers: [Champagnes]
})
export class ChampagnePage {
  products: Array<{title: string, photo: string, description: string, price: any}>;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private champagnesProvider: Champagnes) {
  	this.products = this.champagnesProvider.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChampagnePage');
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
