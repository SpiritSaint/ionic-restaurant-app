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
        title: 'Marques de Casa Concha',
        photo: 'assets/img/default.jpg',
        description: '',
        price: 20750
      },
      {
        title: 'Errázuriz Max Reserva',
        photo: 'assets/img/default.jpg',
        description: '',
        price: 24050
      },
      {
        title: 'Garcés Silva Amayna',
        photo: 'assets/img/default.jpg',
        description: '',
        price: 25150
      },
      {
        title: 'Santa Rita Medalla Real',
        photo: 'assets/img/default.jpg',
        description: '',
        price: 10900
      },
      {
        title: 'Santa Ema Select Terroir',
        photo: 'assets/img/default.jpg',
        description: '',
        price: 12000
      },
      {
        title: 'Leyda Single Vineyard Garuma',
        photo: 'assets/img/default.jpg',
        description: '',
        price: 16400
      },
      {
        title: 'Casas del Bosque Reserva',
        photo: 'assets/img/default.jpg',
        description: '',
        price: 17500
      },
      {
        title: 'Cariblanco Kingston',
        photo: 'assets/img/default.jpg',
        description: '',
        price: 26850
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
