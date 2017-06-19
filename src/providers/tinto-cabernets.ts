import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TintoCabernets provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TintoCabernets {
  data: any;
  constructor(public http: Http) {
    this.data = [
      { 
        title: 'Santa Ema Select Terroir',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 12000
      },
      { 
        title: 'Tabalí Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 19650
      },
      { 
        title: 'Apaltagua Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 14200
      },
      { 
        title: 'Santa Rita casa real',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 18550
      },
      { 
        title: 'Tamaya Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 18550
      },
      { 
        title: 'Castillo de Molina',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 15300
      },
      { 
        title: 'Santa Rita Medalla Real',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 10900
      },
      { 
        title: 'Marques de casa concha',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 22950
      },
      { 
        title: 'Tarapacá Etiqueta Negra',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 25150
      },
      { 
        title: 'De Martino Legado Gran Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 20750
      },
      { 
        title: 'Oveja Negra Single',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 21850
      },
      { 
        title: 'Tarapacá Gran Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 17500
      },
      { 
        title: 'Koyle Single Vineyard',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 20750
      },
      { 
        title: 'Errázuriz Max Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 24050
      },
      { 
        title: 'Terranoble Gran Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 24050
      },
      { 
        title: 'Primus',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 31750
      },
      { 
        title: 'Ventisquero Gray',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 28450
      },
      { 
        title: 'J. Bouchon Block Series Reserva Especial',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 21850
      },
      { 
        title: 'Santa Ema Amplus',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 30650
      },
      { 
        title: 'Casas Patronales Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 12000
      },
      { 
        title: 'Santa Ema Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 19650
      },
      { 
        title: 'Cousiño Macul Antiguas Reservas',
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
        title: 'Chateau Los Boldos Gran Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 18550
      }
    ];
  }

}
