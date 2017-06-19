import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ProductoPage } from '../producto/producto';

import { Carni } from '../../providers/carni';

/*
  Generated class for the Carni page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-carni',
  templateUrl: 'carni.html',
  providers: [Carni]
})
export class CarniPage {
  carnes: Array<{title: string, photo: string, description: string, price: any}>;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private carni: Carni) {
  	this.carnes = this.carni.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarniPage');
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
