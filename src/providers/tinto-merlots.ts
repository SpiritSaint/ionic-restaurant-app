import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TintoMerlots provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TintoMerlots {
  data: any;
  constructor(public http: Http) {
    this.data = [
      { 
        title: 'Santa Ema Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 19650
      },
      { 
        title: 'Santa Rita Medalla Real',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 10900
      },
      { 
        title: 'Marques de Casa Concha',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 22950
      },
      { 
        title: 'Cono Sur Reserva Especial',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 14200
      },
      { 
        title: 'Casablanca Nimbus Single Vineyard',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 22950
      },
      { 
        title: 'Errázuriz, Max Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 24050
      },
      { 
        title: 'Chateau Los Boldos Gran Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 18550
      },
      { 
        title: 'J.Bouchon Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 13100
      },
      { 
        title: 'Cousiño Macul Antiguas Reservas',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 22950
      },
      { 
        title: 'Tarapacá Gran Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 17500
      },
      { 
        title: 'Tabali Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 19650
      }
    ];
  }

}
