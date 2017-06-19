import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ItalianosBlancos provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ItalianosBlancos {
  data: any;
  constructor(public http: Http) {
    this.data = [ 
      { 
        title: 'Pinot Grigio Friuli aquilea D.O.C',
        photo: 'assets/img/default.jpg',
        description: 'Albola, Friuli Cuerpo medio, 12º; Elegante para entradas y pescados.', 
        price: 25100
      }];
    console.log('Hello ItalianosBlancos Provider');
  }

}
