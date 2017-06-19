import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TragosGinebras provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TragosGinebras {
  data: any;
  constructor(public http: Http) {
    this.data = [
      { 
        title: 'Beefeater',
        photo: 'assets/img/default.jpg',
        description: 'Inglaterra', 
        price: 4700
      },
      { 
        title: 'Bombay Sapphire',
        photo: 'assets/img/default.jpg',
        description: 'Inglaterra', 
        price: 4700
      }
    ];
  }

}
