import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ItalianosIconos provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ItalianosIconos {
  data: any;
  constructor(public http: Http) {
    this.data = [ 
      { 
        title: 'Barolo D.O.C.G Cerreta D.O.C.G 2005',
        photo: 'assets/img/default.jpg',
        description: 'Ettore Germano, Piemonte Buen cuerpo; 14.5º; vino elegante, fino, aterciopelado.', 
        price: 109000
      },
      { 
        title: 'Brunello Di Montalcino D.O.C.G 2010',
        photo: 'assets/img/default.jpg',
        description: 'Piancornello, Toscana Buen cuerpo; 14º; tinto elegante, intenso y equilibrado.', 
        price: 88600
      }];
  }

}
