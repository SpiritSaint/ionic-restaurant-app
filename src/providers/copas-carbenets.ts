import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CopasCarbenets provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CopasCarbenets {
  data: any;
  constructor(public http: Http) {
    this.data = [
      { 
        title: 'Errázuriz Max Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 5400
      },
      { 
        title: 'Santa Ema Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 5400
      }
    ];
  }

}
