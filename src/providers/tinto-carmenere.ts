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
        title: 'Oveja Negra Single Vineyard',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 21850
      },
      { 
        title: 'Chateau Los Boldos Gran Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 18550
      },
      { 
        title: 'Von Siebenthal Gran Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 25150
      },
      { 
        title: 'Errázuriz Max Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 24050
      },
      { 
        title: 'Koyle Royale',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 28450
      },
      { 
        title: 'Santa Ema, Select Terrior',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 12000
      },
      { 
        title: 'Santa Rita, Casa Real',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 18550
      },
      { 
        title: 'Arte Sano Carmenere, La Puente Alta',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 30850
      },
      { 
        title: 'Santa Rita, Medalla Real',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 10900
      },
      { 
        title: 'Santa Ema Amplus',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 30650
      },
      { 
        title: 'Santa Ema Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 19650
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
        title: 'Terranoble CA2',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 32850
      },
      { 
        title: 'Casas del Bosque Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 16400
      },
      { 
        title: 'Apaltagual Envero Gran Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 20750
      },
      { 
        title: 'De Martino Legado Gran Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 20750
      }
    ];
  }

}
