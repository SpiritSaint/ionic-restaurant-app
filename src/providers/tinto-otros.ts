import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TintoOtros provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TintoOtros {
  data: any;
  constructor(public http: Http) {
    this.data = [
      { 
        title: 'Santa Rita Medalla Real',
        photo: 'assets/img/default.jpg',
        description: 'Cabernet Franc', 
        price: 11900
      },
      { 
        title: 'Finca La Linda Old Vines',
        photo: 'assets/img/default.jpg',
        description: '(Argentina)',
        price: 19800
      },
      {
        title: 'Kaiken Reserva',
        photo: 'assets/img/default.jpg',
        description: '',
        price: 15900
      },
      {
        title: 'Luigi Bosca Reserva',
        photo: 'assets/img/default.jpg',
        description: '(Argentina)',
        price: 23400
      }
    ];
  }

}
