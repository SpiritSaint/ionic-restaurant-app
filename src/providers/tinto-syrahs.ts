import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TintoSyrahs provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TintoSyrahs {
  data: any;
  constructor(public http: Http) {
    this.data = [
      { 
        title: 'Montes Alpha',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 22500
      },
      { 
        title: 'Santa Rita Casa Real',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 18600
      },
      { 
        title: 'Casas Patronales Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 12900
      },
      { 
        title: 'Santa Rita Medalla Real',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 11900
      },
      { 
        title: 'Errázuriz Max Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 19800
      },
      { 
        title: 'Ventisquero Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 13900
      },
      { 
        title: 'Koyle Single Vineyard',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 18900
      },
      {
        title: 'Veramonte Reserva',
        photo: 'assets/img/default.jpg',
        description: '',
        price: 16800
      },
      {
        title: 'Longaví by Bouchon',
        photo: 'assets/img/default.jpg',
        description: '',
        price: 19600
      },
      {
        title: 'Villard Expression',
        photo: 'assets/img/default.jpg',
        description: '',
        price: 18900
      }
    ];
  }

}
