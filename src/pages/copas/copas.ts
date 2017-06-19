import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ProductoPage } from '../producto/producto';

import { CopasSauvignon } from '../../providers/copas-sauvignon';
import { CopasEnsambled } from '../../providers/copas-ensambled';
import { CopasCarbenets } from '../../providers/copas-carbenets';
import { CopasSyrah } from '../../providers/copas-syrah';
import { CopasMerlot } from '../../providers/copas-merlot';
import { CopasEspumante } from '../../providers/copas-espumante';
import { CopasCarmenere } from '../../providers/copas-carmenere';
import { CopasPinot } from '../../providers/copas-pinot';
import { CopasChardonnays } from '../../providers/copas-chardonnays';
/*
  Generated class for the Copas page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-copas',
  templateUrl: 'copas.html',
  providers: [
    CopasSauvignon,
    CopasEnsambled,
    CopasCarbenets,
    CopasSyrah,
    CopasMerlot,
    CopasEspumante,
    CopasCarmenere,
    CopasPinot,
    CopasChardonnays
  ]
})
export class CopasPage {
  sauvignon: Array<{title: string, photo: string, description: string, price: any}>;
  ensambled: Array<{title: string, photo: string, description: string, price: any}>;
  carbenets: Array<{title: string, photo: string, description: string, price: any}>;
  syrah: Array<{title: string, photo: string, description: string, price: any}>;
  merlot: Array<{title: string, photo: string, description: string, price: any}>;
  chardonnay: Array<{title: string, photo: string, description: string, price: any}>;
  espumante: Array<{title: string, photo: string, description: string, price: any}>;
  carmenere: Array<{title: string, photo: string, description: string, price: any}>;
  pinot: Array<{title: string, photo: string, description: string, price: any}>;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private copasSauvignonProvider: CopasSauvignon,
              private copasEnsambledProvider: CopasEnsambled,
              private copasCarbenetsProvider: CopasCarbenets,
              private copasSyrahProvider: CopasSyrah,
              private copasMerlotProvider: CopasMerlot,
              private copasEspumanteProvider: CopasEspumante,
              private copasCarmenereProvider: CopasCarmenere,
              private copasPinotProvider: CopasPinot,
              private copasChardonnayProvider: CopasChardonnays) {
  	this.sauvignon = this.copasSauvignonProvider.data;
    this.ensambled = this.copasEnsambledProvider.data;
    this.carbenets = this.copasCarbenetsProvider.data;
    this.syrah = this.copasSyrahProvider.data;
    this.merlot = this.copasMerlotProvider.data;
    this.espumante = this.copasEspumanteProvider.data;
    this.carmenere = this.copasCarmenereProvider.data;
    this.pinot = this.copasPinotProvider.data;
    this.chardonnay = this.copasChardonnayProvider.data;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CopasPage');
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
