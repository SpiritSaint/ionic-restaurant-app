import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CopasSyrah provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CopasSyrah {
  data: any;
  constructor(public http: Http) {
    this.data =  [
      { 
        title: 'Tabali Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 5400
      }
    ];
  }

}
