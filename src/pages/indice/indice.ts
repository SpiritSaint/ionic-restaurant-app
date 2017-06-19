import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { EntradasPage } from '../entradas/entradas';
import { RisottiPage } from '../risotti/risotti';
import { InsalatePage } from '../insalate/insalate';
import { CarniPage } from '../carni/carni';
import { ZuppePage } from '../zuppe/zuppe';
import { PescePage } from '../pesce/pesce';
import { PastePage } from '../paste/paste';
import { DolciPage } from '../dolci/dolci';
/*
  Generated class for the Indice page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-indice',
  templateUrl: 'indice.html'
})
export class IndicePage {
  @ViewChild('myNav') nav: NavController
  left: Array<{title: string, component: any}>;
  right: Array<{title: string, component: any}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.left = [
      { title: 'Entradas', component: EntradasPage },
      { title: 'Instalate', component: InsalatePage },
      { title: 'Zuppe', component: ZuppePage },
      { title: 'Paste', component: PastePage }
    ];

    this.right = [
      { title: 'Risotti', component: RisottiPage },
      { title: 'Carni', component: CarniPage },
      { title: 'Pesce', component: PescePage },
      { title: 'Dolci', component: DolciPage }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndicePage');
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push(page.component);
  }

}
