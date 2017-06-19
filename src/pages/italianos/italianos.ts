import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ProductoPage } from '../producto/producto';

import { ItalianosBlancos } from '../../providers/italianos-blancos';
import { ItalianosFrizzantes } from '../../providers/italianos-frizzantes';
import { ItalianosPremiums } from '../../providers/italianos-premiums';
import { ItalianosDulces } from '../../providers/italianos-dulces';
import { ItalianosIconos } from '../../providers/italianos-iconos';
/*
  Generated class for the Italianos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
  */
  @Component({
    selector: 'page-italianos',
    templateUrl: 'italianos.html',
    providers: [
      ItalianosBlancos,  
      ItalianosFrizzantes, 
      ItalianosPremiums,
      ItalianosDulces,
      ItalianosIconos
    ]
  })
  export class ItalianosPage {
    blancos: Array<{title: string, photo: string, description: string, price: any}>;
    frizzantes: Array<{title: string, photo: string, description: string, price: any}>;
    premiums: Array<{title: string, photo: string, description: string, price: any}>;
    dulces: Array<{title: string, photo: string, description: string, price: any}>;
    iconos: Array<{title: string, photo: string, description: string, price: any}>;
    constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                private italianosBlancosProvider: ItalianosBlancos,
                private italianosFrizzantesProvider: ItalianosFrizzantes,
                private italianosPremiumsProvider: ItalianosPremiums,
                private italianosDulcesProvider: ItalianosDulces,
                private italianosIconosProvider: ItalianosIconos) {
      this.blancos = this.italianosBlancosProvider.data;
      this.frizzantes = this.italianosFrizzantesProvider.data;
      this.premiums = this.italianosPremiumsProvider.data;
      this.dulces = this.italianosDulcesProvider.data;
      this.iconos = this.italianosIconosProvider.data;

    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad ItalianosPage');
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
