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
        title: 'Montes Alpha',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 22500
      },
      { 
        title: 'Santa Rita Casa Real',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 18600
      },
      { 
        title: 'Veramonte Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 16800
      },
      { 
        title: 'Villard Expresion Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 18900
      },
      { 
        title: 'Cono Sur Reserva Especial',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 15200
      },
      { 
        title: 'Errázuriz Max Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 19800
      }
    ];
  }

}
