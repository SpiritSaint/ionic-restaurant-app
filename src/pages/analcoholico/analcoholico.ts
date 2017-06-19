import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ProductoPage } from '../producto/producto'

import { Analcoholicos } from '../../providers/analcoholicos';
/*
  Generated class for the Analcoholico page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-analcoholico',
  templateUrl: 'analcoholico.html',
  providers: [Analcoholicos]
})
export class AnalcoholicoPage {
    analcoholicos: Array<{title: string, photo: string, description: string, price: any}>;
    constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                private analcoholicosProvider: Analcoholicos) {

      /* Entradas - Borde del rio */
      this.analcoholicos = this.analcoholicosProvider.data;
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad AnalcoholicoPage');
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
