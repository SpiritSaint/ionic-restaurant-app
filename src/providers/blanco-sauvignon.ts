import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the BlancoSauvignon provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
    */
  @Injectable()
  export class BlancoSauvignon {
    data: any;
    constructor(public http: Http) {
      this.data = [
      {
        title: 'Cono Sur Reserva Especial',
        photo: 'assets/img/default.jpg',
        description: '',
        price: 15200
      },
      {
        title: 'Amayna',
        photo: 'assets/img/default.jpg',
        description: '',
        price: 21900
      },
      {
        title: 'Errázuriz Max Reserva',
        photo: 'assets/img/default.jpg',
        description: '',
        price: 19800
      },
      {
        title: 'Casas del Bosque Reserva',
        photo: 'assets/img/default.jpg',
        description: '',
        price: 16900
      },
      {
        title: 'Matetic Corralillo',
        photo: 'assets/img/default.jpg',
        description: '',
        price: 17600
      },
      {
        title: 'Santa Ema Select Terroir',
        photo: 'assets/img/default.jpg',
        description: '',
        price: 13600
      },
      {
        title: 'Santa Rita Medalla Real',
        photo: 'assets/img/default.jpg',
        description: '',
        price: 11900
      },
      {
        title: 'Veramonte Reserva',
        photo: 'assets/img/default.jpg',
        description: '',
        price: 16800
      },
      {
        title: 'Matetic Corralillo',
        photo: 'assets/img/default.jpg',
        description: '',
        price: 18550
      }
      ];

    }

  }
