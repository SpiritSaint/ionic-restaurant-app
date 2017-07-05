import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TintoMerlots provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TintoMerlots {
  data: any;
  constructor(public http: Http) {
    this.data = [
      { 
        title: 'Santa Ema Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 18300
      },
      {
        title: 'Casa blanca Céfiro',
        photo: 'assets/img/default.jpg',
        description: '',
        price: 15200
      },
      {
        title: 'Santa Rita Casa Real',
        photo: 'assets/img/default.jpg',
        description: '',
        price: 18600
      },
      { 
        title: 'Cono Sur Reserva Especial',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 15200
      },
      {
        title: 'Santa Rita Medalla Real',
        photo: 'assets/img/default.jpg',
        description: '',
        price: 11900
      },
      { 
        title: 'Tarapacá Gran Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 17900
      },
      { 
        title: 'Toro de Piedra Gran Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 19800
      },
      { 
        title: 'Errázuriz Max Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 19800
      },
      { 
        title: 'J. Bouchon Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 12900
      },
      { 
        title: 'Montes Alpha',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 22500
      }
    ];
  }

}
