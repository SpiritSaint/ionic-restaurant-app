import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ItalianosFrizzantes provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ItalianosFrizzantes {
  data: any;
  constructor(public http: Http) {
    this.data = [ 
      { 
        title: 'Lambrusco Antco Bruscone',
        photo: 'assets/img/default.jpg',
        description: 'Cantine Ceci, Emilia Romagna Tinto burbuja sutil; 11,5º; el clásico maridaje de LaEmilia.', 
        price: 27500
      },
      { 
        title: 'Otello Nero di Lambrusco',
        photo: 'assets/img/default.jpg',
        description: 'Cantine Ceci, Emilia Romagna Tinto burbuja sutil; 11º; largo y cremoso en boca. el lambrusco icono de italia.', 
        price: 32100
      }];
  }

}
