import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TintoPinot provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TintoPinot {
  data: any;
  constructor(public http: Http) {
    this.data = [
      { 
        title: 'Villard Expresion Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 24050
      },
      { 
        title: 'Tobiano, Kingston',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 29550
      },
      { 
        title: 'Montescano 2015',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 34950
      },
      { 
        title: 'Veramonte Ritual',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 29550
      },
      { 
        title: 'Cono Sur Reserva Especial',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 14200
      },
      { 
        title: 'Garcés Silva Amayna',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 33950
      },
      { 
        title: 'Leyda Lot 21',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 35050
      }
    ];
  }

}
