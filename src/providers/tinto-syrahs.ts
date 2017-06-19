import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TintoSyrahs provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TintoSyrahs {
  data: any;
  constructor(public http: Http) {
    this.data = [
      { 
        title: 'Lucero Kingston',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 29550
      },
      { 
        title: 'Santa Rita, Medalla Real',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 10900
      },
      { 
        title: 'Tamaya Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 18550
      },
      { 
        title: 'Chaman Gran Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 19650
      },
      { 
        title: 'Casas sel Bosque Gran Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 24050
      },
      { 
        title: 'Matetic Corralillo',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 29550
      },
      { 
        title: 'Casas sel Bosque Gran Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 24050
      }
    ];
  }

}
