import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ProductoPage } from '../producto/producto';

import { RisottiClassici } from '../../providers/risotti-classici';
import { RisottiRisoArborio } from '../../providers/risotti-riso-arborio'

/*
  Generated class for the Risotti page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-risotti',
  templateUrl: 'risotti.html',
  providers: [RisottiClassici, RisottiRisoArborio]
})
export class RisottiPage {
  risottiClassici: Array<{title: string, photo: string, description: string, price: any}>;
  risottiRisoArborio: Array<{title: string, photo: string, description: string, price: any}>;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private rissotiClassiciProvider: RisottiClassici,
              private rissotiRisoArborioProvider: RisottiRisoArborio) {
    
    /* Risotti Classici */
    this.risottiClassici = this.rissotiClassiciProvider.data;

    /* Risotti Riso Arborio */
    this.risottiRisoArborio = this.rissotiRisoArborioProvider.data;
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
