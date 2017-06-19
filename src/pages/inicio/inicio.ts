import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';

import { IndicePage } from '../indice/indice';
import { NosotrosPage } from '../nosotros/nosotros';
import { SugerenciasPage } from '../sugerencias/sugerencias';
import { BarPage } from '../bar/bar';
import { BuscadorPage } from '../buscador/buscador';

/*
  Generated class for the Inicio page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {
  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');

  }

  showCatalog() {
    this.navCtrl.push(IndicePage);
  }
  showSuggestions() {
    this.navCtrl.push(SugerenciasPage);
  }
  showBarCatalog() {
    this.navCtrl.push(BarPage);
  }
  showAboutUs() {
    this.navCtrl.push(NosotrosPage);
  }
  openSearch() {
    this.navCtrl.push(BuscadorPage);
  }
}
