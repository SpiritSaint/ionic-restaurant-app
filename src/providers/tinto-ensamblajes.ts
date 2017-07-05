import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TintoEnsamblajes provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TintoEnsamblajes {
  data: any;
  constructor(public http: Http) {
    this.data = [
      { 
        title: 'Ventisquero Grey GAR/CAR/MAT',
        photo: 'assets/img/default.jpg',
        description: '',
        price: 20900
      },
      { 
        title: 'Von Siebenthal Parcela 7 CS/CF/ME/PV',
        photo: 'assets/img/default.jpg',
        description: '',
        price: 22900
      },
      { 
        title: 'Casa Patronales Reserva CS/CA',
        photo: 'assets/img/default.jpg',
        description: '',
        price: 12900
      },
      { 
        title: 'J. Bouchon Canto Sur CA/CG/PA',
        photo: 'assets/img/default.jpg',
        description: '',
        price: 15900
      },
      { 
        title: 'Toro de Piedra Gran Reserva SY/CS',
        photo: 'assets/img/default.jpg',
        description: 'Cabernet Sauvignon / Cabernet Franc / Merlot / Petit Verdot', 
        price: 19800
      }
    ];
  }

}
