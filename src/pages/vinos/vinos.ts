import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TintoPage } from '../tinto/tinto';
import { BlancoPage } from '../blanco/blanco';
import { ChampagnePage } from '../champagne/champagne';
import { GrandesPage } from '../grandes/grandes';
import { ItalianosPage } from '../italianos/italianos';
import { MediaPage } from '../media/media';
import { CopasPage } from '../copas/copas';
/*
  Generated class for the Vinos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-vinos',
  templateUrl: 'vinos.html'
})
export class VinosPage {
  right: Array<{title: string, component: any}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.right = [
      { title: 'Vinos Tintos', component: TintoPage },
      { title: 'Vinos Blancos', component: BlancoPage },
      { title: 'Champagne', component: ChampagnePage },
      { title: 'Grandes Vinos', component: GrandesPage },
      { title: 'Italianos', component: ItalianosPage },
      { title: 'Medias Botellas', component: MediaPage },
      { title: 'Por Copa', component: CopasPage }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VinosPage');
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push(page.component);
  }

}
