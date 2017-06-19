import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TragosPremiumVodkas provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TragosPremiumVodkas {
  data: any;
  constructor(public http: Http) {
    this.data = [
      { 
        title: 'Grey Goose',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 7600
      },
      { 
        title: 'Grey Goose L´Orange, L´Poire, L´Citron',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 7600
      }
    ];
  }

}
