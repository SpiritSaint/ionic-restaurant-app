import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MediaCarmenere } from '../../providers/media-carmenere';
import { MediaChardonnays } from '../../providers/media-chardonnays';
import { MediaCarbenets } from '../../providers/media-carbenets';
import { MediaSauvignons } from '../../providers/media-sauvignons';
/*
  Generated class for the Media page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-media',
  templateUrl: 'media.html',
  providers: [
    MediaCarmenere,
    MediaChardonnays,
    MediaCarbenets,
    MediaSauvignons
  ]
})
export class MediaPage {
  carmeneres: Array<{title: string, photo: string, description: string, price: any}>;
  chardonnays: Array<{title: string, photo: string, description: string, price: any}>;
  carbenets: Array<{title: string, photo: string, description: string, price: any}>;
  sauvignons: Array<{title: string, photo: string, description: string, price: any}>;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private mediaCarmenereProvider: MediaCarmenere,
              private mediaChardonnaysProvider: MediaChardonnays,
              private mediaCarbenetsProvider: MediaCarbenets,
              private mediaSauvignonsProvider: MediaSauvignons) {
  	this.carmeneres = this.mediaCarmenereProvider.data;
    this.chardonnays = this.mediaChardonnaysProvider.data;
    this.carbenets = this.mediaCarbenetsProvider.data;
    this.sauvignons = this.mediaSauvignonsProvider.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MediaPage');
  }

}
