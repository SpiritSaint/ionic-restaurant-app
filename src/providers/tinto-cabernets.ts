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
        title: 'Toro de Piedra Gran Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 19800
      },
      { 
        title: 'Casas del Bosque Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 16900
      },
      { 
        title: 'Veramonte Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 16800
      },
      { 
        title: 'Casas Patronales Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 12900
      },
      { 
        title: 'Las Mercedes Singular',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 17500
      },
      { 
        title: 'Cono sur Block N°18',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 19800
      },
      { 
        title: 'Montes Alpha',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 22500
      },
      { 
        title: 'Cono Sur Reserva Especial',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 15200
      },
      { 
        title: 'Santa Ema Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 17900
      },
      { 
        title: 'Errázuriz Max Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 19800
      },
      { 
        title: 'Santa Ema Select Terroir',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 13600
      },
      { 
        title: 'J. Bouchon Block Series',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 19800
      },
      { 
        title: 'Santa Rita Casa Real',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 18600
      },
      { 
        title: 'Koyle Single Vineyard',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 18900
      },
      { 
        title: 'Santa Rita Medalla Real',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 11900
      },
      { 
        title: 'Apaltagua Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 14800
      },
      { 
        title: 'Tarapacá Gran Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 17900
      },
      { 
        title: 'Aquitania Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 20800
      }
    ];
  }

}
