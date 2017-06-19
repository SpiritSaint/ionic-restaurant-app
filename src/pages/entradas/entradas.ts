import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ProductoPage } from '../producto/producto';

import { EntradasBordeRio } from '../../providers/entradas-borde-rio';
import { EntradasClassiche } from '../../providers/entradas-classiche';

/*
  Generated class for the Entradas page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
  */
  @Component({
    selector: 'page-entradas',
    templateUrl: 'entradas.html',
    providers: [EntradasBordeRio,EntradasClassiche]
  })
  export class EntradasPage {
    bordeRio: Array<{title: string, photo: string, description: string, price: any}>;
    clasicas: Array<{title: string, photo: string, description: string, price: any}>;
    constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                private entradasBordeRio: EntradasBordeRio,
                private entradasClassiche: EntradasClassiche) {

      /* Entradas Borde Rio */
      this.bordeRio = entradasBordeRio.data;

      /* Entradas Classiche */
      this.clasicas = entradasClassiche.data;
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
