import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ProductoPage } from '../producto/producto';

import { DolciBajosEnCalorias } from '../../providers/dolci-bajos-en-calorias';
import { DolciPostres } from '../../providers/dolci-postres';

/*
  Generated class for the Dolci page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-dolci',
  templateUrl: 'dolci.html',
  providers: [DolciBajosEnCalorias, DolciPostres]
})
export class DolciPage {
  bajosEnCalorias: Array<{title: string, photo: string, description: string, price: any}>;
  postres: Array<{title: string, photo: string, description: string, price: any}>;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private dolciBajosEnCalorias: DolciBajosEnCalorias,
              private dolciPostres: DolciPostres) {
  	  /* Dolci Bajos en Calorias */
      this.bajosEnCalorias = this.dolciBajosEnCalorias.data;

      /* Dolci Postres */
      this.postres = this.dolciPostres.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DolciPage');
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
