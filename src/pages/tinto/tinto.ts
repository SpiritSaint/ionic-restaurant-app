import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ProductoPage } from '../producto/producto';

import { TintoPinot } from '../../providers/tinto-pinot';
import { TintoCarmenere } from '../../providers/tinto-carmenere';
import { TintoEnsamblajes } from '../../providers/tinto-ensamblajes';
import { TintoMerlots } from '../../providers/tinto-merlots';
import { TintoOtros } from '../../providers/tinto-otros';
import { TintoCabernets } from '../../providers/tinto-cabernets';
import { TintoSyrahs } from '../../providers/tinto-syrahs';
/*
  Generated class for the Tinto page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tinto',
  templateUrl: 'tinto.html',
  providers: [
    TintoPinot,
    TintoCarmenere,
    TintoEnsamblajes,
    TintoMerlots,
    TintoOtros,
    TintoCabernets,
    TintoSyrahs
  ]
})
export class TintoPage {
  pinot: Array<{title: string, photo: string, description: string, price: any}>;
  carmenere: Array<{title: string, photo: string, description: string, price: any}>;
  ensamblajes: Array<{title: string, photo: string, description: string, price: any}>;
  merlots: Array<{title: string, photo: string, description: string, price: any}>;
  otros: Array<{title: string, photo: string, description: string, price: any}>;
  cabernets: Array<{title: string, photo: string, description: string, price: any}>;
  syrahs: Array<{title: string, photo: string, description: string, price: any}>;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private tintoPinotProvider: TintoPinot,
              private tintoCarmenereProvider: TintoCarmenere,
              private tintoEnsamblajesProvider: TintoEnsamblajes,
              private tintoMerlotsProvider: TintoMerlots,
              private tintoOtrosProvider: TintoOtros,
              private tintoCabernetsProvider: TintoCabernets,
              private tintoSyrahsProviders: TintoSyrahs) {
  	this.pinot = this.tintoPinotProvider.data;
    this.carmenere = this.tintoCarmenereProvider.data;
    this.ensamblajes = this.tintoEnsamblajesProvider.data;
    this.merlots = this.tintoMerlotsProvider.data;
    this.otros = this.tintoOtrosProvider.data;
    this.cabernets = this.tintoCabernetsProvider.data;
    this.syrahs = this.tintoSyrahsProviders.data;
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
