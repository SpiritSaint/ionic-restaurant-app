import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TragosVodka provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TragosVodka {
  data: any;
  constructor(public http: Http) {
    this.data = [
      { 
        title: 'Stolichnaya',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 4300
      },
      { 
        title: 'Absolut Blue',
        photo: 'assets/img/default.jpg',
        description: '(Vainilla, Citrón, Mandarín, Pear, Peppar, Raspberry)', 
        price: 6200
      }
    ];
  }

}
