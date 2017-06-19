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
        title: 'Primus The Blend',
        photo: 'assets/img/default.jpg',
        description: 'Cabernet Sauvignon / Carmenère / Syrah / Petit Verdot', 
        price: 31750
      },
      { 
        title: 'Santa Ema Catalina',
        photo: 'assets/img/default.jpg',
        description: 'Cabernet Sauvignon / Carmenère / Cabernet Franc', 
        price: 18550
      },
      { 
        title: 'Casas Patronaes',
        photo: 'assets/img/default.jpg',
        description: 'Cabernet Sauvignon / Carmenère', 
        price: 12000
      },
      { 
        title: 'Toro de Piedra, Gran Reserva',
        photo: 'assets/img/default.jpg',
        description: 'Syrah / Cabernet Sauvignon', 
        price: 19650
      },
      { 
        title: 'Von Siebenthal, Parcela 7',
        photo: 'assets/img/default.jpg',
        description: 'Cabernet Sauvignon / Cabernet Franc / Merlot / Petit Verdot', 
        price: 25150
      },
      { 
        title: 'Oveja Negra',
        photo: 'assets/img/default.jpg',
        description: 'Cabernet Franc / Carmenère', 
        price: 10900
      }
    ];
  }

}
