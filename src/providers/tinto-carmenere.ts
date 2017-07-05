import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TintoCarmenere provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TintoCarmenere {
  data: any;
  constructor(public http: Http) {
    this.data = [
      { 
        title: 'Santa Rita Medalla Real',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 11900
      },
      { 
        title: 'Casas Patronales Reserva Privada',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 18600
      },
      { 
        title: 'Santa Carolina Gran Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 17500
      },
      { 
        title: 'Tarapacá Gran Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 17900
      },
      { 
        title: 'Toro de piedra Gran Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 19800
      },
      { 
        title: 'J. Bouchon Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 12900
      },
      { 
        title: 'Santa Ema Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 18600
      },
      { 
        title: 'Casas del Bosque, Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 16900
      },
      { 
        title: 'Montes Alpha',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 19500
      },
      { 
        title: 'Errázuriz Max Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 19800
      },
      { 
        title: 'Veramonte Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 16800
      },
      { 
        title: 'Santa Ema Amplus',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 28800
      },
      { 
        title: 'Santa Ema Select Terroir',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 13600
      },
      { 
        title: 'Koyle Single Vineyard',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 19500
      },
      { 
        title: 'Santa Rita Casa Real',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 18600
      }
    ];
  }

}
