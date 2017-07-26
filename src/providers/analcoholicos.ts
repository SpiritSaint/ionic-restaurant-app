import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Analcoholicos provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Analcoholicos {
  data: any;
  constructor(public http: Http) {
    this.data = [
      { 
        title: 'Agua Mineral Italiana',
        photo: 'assets/img/default.jpg',
        description: 'Acqua Panna - San Pellegrino', 
        price: 2600
      },
      { 
        title: 'Jugos',
        photo: 'assets/img/bar/analcoholico/jugo.jpg',
        description: '', 
        price: 3200
      },
      { 
        title: 'Bebidas', 
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 2200
      },
      { 
        title: 'Aguas Minerales', 
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 2200
      }
      ];
  }

}
