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
        title: 'Montes Alpha',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 22500
      },
      { 
        title: 'Santa Rita Medalla Real',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 11900
      },
      { 
        title: 'Casablanca Céfiro Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 15200
      },
      {
        title: 'Villard Expresion',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 18900
      }, {
            title: 'Casas del Bosque Reserva',
            photo: 'assets/img/default.jpg',
            description: '',
            price: 16900
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
