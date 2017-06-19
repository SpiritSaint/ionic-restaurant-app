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
        title: 'Terranoble Single Vinyard',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 10900
      },
      { 
        title: 'Santa Ema Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 13100
      }
    ];
  }

}
