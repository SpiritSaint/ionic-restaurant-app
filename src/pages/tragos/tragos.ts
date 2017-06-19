import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ProductoPage } from '../producto/producto';

import { TragosGinebras } from '../../providers/tragos-ginebras';
import { TragosVodka } from '../../providers/tragos-vodka';
import { TragosWhisky } from '../../providers/tragos-whisky';
import { TragosScotch } from '../../providers/tragos-scotch';
import { TragosPiscos } from '../../providers/tragos-piscos';
import { TragosRon } from '../../providers/tragos-ron';
import { TragosPremiumVodkas } from '../../providers/tragos-premium-vodkas';
import { TragosMaltWhisky } from '../../providers/tragos-malt-whisky';
import { TragosPiscosPeruanos } from '../../providers/tragos-piscos-peruanos';
/*
  Generated class for the Tragos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tragos',
  templateUrl: 'tragos.html',
  providers: [
    TragosGinebras,
    TragosVodka,
    TragosWhisky,
    TragosScotch,
    TragosPiscos,
    TragosRon,
    TragosPremiumVodkas,
    TragosMaltWhisky,
    TragosPiscosPeruanos
  ]
})
export class TragosPage {
  ginebras: Array<{title: string, photo: string, description: string, price: any}>;
  vodka: Array<{title: string, photo: string, description: string, price: any}>;
  whisky: Array<{title: string, photo: string, description: string, price: any}>;
  scotch: Array<{title: string, photo: string, description: string, price: any}>;
  piscos: Array<{title: string, photo: string, description: string, price: any}>;
  ron: Array<{title: string, photo: string, description: string, price: any}>;
  premiumVodkas: Array<{title: string, photo: string, description: string, price: any}>;
  maltWhisky: Array<{title: string, photo: string, description: string, price: any}>;
  piscosPeruanos: Array<{title: string, photo: string, description: string, price: any}>;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private tragosGinebrasProvider: TragosGinebras,
              private tragosVodkaProvider: TragosVodka,
              private tragosWhiskyProvider: TragosWhisky,
              private tragosScotchProvider: TragosScotch,
              private tragosPiscosProvider: TragosPiscos,
              private tragosRonProvider: TragosRon,
              private tragosPremiumVodkasProvider: TragosPremiumVodkas,
              private tragosMaltWhiskyProvider: TragosMaltWhisky,
              private tragosPiscosPeruanosProvider: TragosPiscosPeruanos) {
  	this.ginebras = tragosGinebrasProvider.data;

    this.vodka = tragosVodkaProvider.data;

    this.whisky = tragosWhiskyProvider.data;

    this.scotch = tragosScotchProvider.data;

    this.piscos = tragosPiscosProvider.data;

    this.ron = tragosRonProvider.data;

    this.premiumVodkas = tragosPremiumVodkasProvider.data;

    this.maltWhisky = tragosMaltWhiskyProvider.data;

    this.piscosPeruanos = tragosPiscosPeruanosProvider.data;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TragosPage');
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
