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
        title: 'Valdivieso, Single Vineyard',
        photo: 'assets/img/default.jpg',
        description: 'Cabernet Franc', 
        price: 20750
      },
      { 
        title: 'De Martino Vigno - Carignan',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 32900
      }
    ];
  }

}
