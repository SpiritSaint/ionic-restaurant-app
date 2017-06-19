import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ProductoPage } from '../producto/producto';

import { PasteClassiche } from '../../providers/paste-classiche';
import { PasteBordeRio } from '../../providers/paste-borde-rio';

/*
  Generated class for the Paste page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-paste',
  templateUrl: 'paste.html',
  providers: [PasteBordeRio, PasteClassiche]
})
export class PastePage {
  pastesClassiche: Array<{title: string, photo: string, description: string, price: any}>;
  pastesBordeRio: Array<{title: string, photo: string, description: string, price: any}>;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private pasteBordeRioProvider: PasteBordeRio,
              private pasteClassicheProvider: PasteClassiche) {

      /* Paste Classiche */
      this.pastesClassiche = this.pasteClassicheProvider.data;

      /* Paste Borde Rio */
      this.pastesBordeRio = this.pasteBordeRioProvider.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PastePage');
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
