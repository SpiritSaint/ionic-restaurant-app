import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ProductoPage } from '../producto/producto';

import { InsalateSaladas } from '../../providers/insalate-saladas';

/*
  Generated class for the Insalate page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
  */
  @Component({
    selector: 'page-insalate',
    templateUrl: 'insalate.html',
    providers: [InsalateSaladas]
  })
  export class InsalatePage {
    instalates: Array<{title: string, photo: string, description: string, price: any}>;
    constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                private insalateSaladas: InsalateSaladas) {
      /* Insalate Saladas */      
      this.instalates = insalateSaladas.data;
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
