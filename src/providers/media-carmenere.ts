import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MediaCarmenere provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MediaCarmenere {
  data: any;
  constructor(public http: Http) {
    this.data = [
      {
        title: 'Santa Ema Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 12900
      },
      {
        title: 'Santa Ema Select Terroir Reserve',
        photo: 'assets/img/default.jpg',
        description: '',
        price: 7400
      }
    ];
  }

}
