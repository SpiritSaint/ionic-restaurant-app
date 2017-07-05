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
        title: 'Cabernet Sauvignon',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 5500
      }
    ];
  }

}
