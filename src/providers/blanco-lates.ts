import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the BlancoLates provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class BlancoLates {
  data: any;
  constructor(public http: Http) {
  	this.data = [
      { 
        title: 'Tamaya Sweet Goat',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 12000
      },
      { 
        title: 'Tabali Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 17500
      }
    ];
  }

}
