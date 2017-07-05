import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TragosPiscosPeruanos provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TragosPiscosPeruanos {
  data: any;
  constructor(public http: Http) {
    this.data = [
      { 
        title: 'Cuatro Gallos',
        photo: 'assets/img/default.jpg',
        description: '(Verde Italia)', 
        price: 4950
      },
      { 
        title: 'Piso Sour Peruano',
        photo: 'assets/img/default.jpg',
        description: 'Inglaterra', 
        price: 5250
      },
      { 
        title: 'Portón',
        photo: 'assets/img/default.jpg',
        description: '(Mosto Verde)', 
        price: 6450
      },
      { 
        title: 'Tabernero',
        photo: 'assets/img/default.jpg',
        description: '(Quebranta, Italia, Acholado)', 
        price: 4300
      }
    ];
  }

}
