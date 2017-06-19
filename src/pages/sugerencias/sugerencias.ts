import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Sugerencias page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sugerencias',
  templateUrl: 'sugerencias.html'
})
export class SugerenciasPage {
  slides = [
    {
      title: "Goloso Ma Simpatico",
      description: "Mousse de Nutella giandulla italiana.",
      image: "assets/img/recomendaciones/goloso-ma-simpatico.jpg",
    },
    {
      title: "Paccheri",
      description: "Tortelli rellenos de ossobuco con salsa de hongos mixtos arándanos y perejil.",
      image: "assets/img/recomendaciones/paccheri.jpg",
    },
    {
      title: "Rococo",
      description: "Rollitos de berenjenas grilladas con jaiba y salsa arrabiata.",
      image: "assets/img/recomendaciones/rococo.jpg",
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SugerenciasPage');
  }

}
