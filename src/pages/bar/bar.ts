import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AnalcoholicoPage } from '../analcoholico/analcoholico';
import { CafesPage } from '../cafes/cafes';
import { VinosPage } from '../vinos/vinos';
import { AperitivosPage } from '../aperitivos/aperitivos';
import { CervezasPage } from '../cervezas/cervezas';
import { TragosPage } from '../tragos/tragos';

/*
  Generated class for the Bar page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bar',
  templateUrl: 'bar.html'
})
export class BarPage {
  left: Array<{title: string, component: any}>;
  right: Array<{title: string, component: any}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.left = [
      { title: 'Sin alcohol', component: AnalcoholicoPage },
      { title: 'Aperitivos', component: AperitivosPage },
      { title: 'Cervezas', component: CervezasPage }
    ];

    this.right = [
      { title: 'Cafetería', component: CafesPage },
      { title: 'Vinos', component: VinosPage },
      { title: 'Tragos', component: TragosPage }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarPage');
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push(page.component);
  }
}
