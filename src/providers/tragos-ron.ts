import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TragosRon provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TragosRon {
  data: any;
  constructor(public http: Http) {
    this.data = [
      { 
        title: 'Bacardí Añejo',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 4400
      },
      { 
        title: 'Bacardí Solera',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 5000
      },
      { 
        title: 'Bacardí 8 años',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 7200
      },
      { 
        title: 'Havana Club Añejo Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 6100
      },
      { 
        title: 'Havana Club Selección de Maestros',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 9800
      },
      { 
        title: 'Bacardí Superior',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 3900
      }
    ];
  }

}
