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
        title: 'Toro de Piedra Gran Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 12900
      },
      { 
        title: 'Casa Patronales Lujuria',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 18900
      }
    ];
  }

}
