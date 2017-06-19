import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the BlancoChardonnays provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class BlancoChardonnays {
  data: any;
  constructor(public http: Http) {
  	this.data = [
      { 
        title: 'Leyda Single Vineyard Fallaris',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 16400
      },
      { 
        title: 'De Martino Legado Gran Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 20750
      },
      { 
        title: 'Santa Rita Medalla Real',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 10900
      },
      { 
        title: 'Casablanca Cefiro Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 13100
      },
      { 
        title: 'Cono Sur Reserva Especial',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 14200
      }
    ];
  }

}
