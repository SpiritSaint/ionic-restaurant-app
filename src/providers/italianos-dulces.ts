import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ItalianosDulces provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ItalianosDulces {
  data: any;
  constructor(public http: Http) {
    this.data = [ 
      { 
        title: 'Fortanina La Luna I.G.T',
        photo: 'assets/img/default.jpg',
        description: 'Cantine Ceci, Emilia Romagna Vino Tinto dulce; Burbuja sutil; 8.5º; Ideal para entradas y platos dulces.', 
        price: 24050
      }
    ];
  }

}
