import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Zuppe provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Zuppe {
  data: any;
  constructor(public http: Http) {
    this.data = [ 
      { 
        title: 'Caldillo de Congrio Due Torri con Mariscos',
        photo: 'assets/img/zuppe/caldillo-de-congrio-con-mariscos.jpg',
        description: '', 
        price: 16750
      },
      { 
        title: 'Caldillo de Congrio Due Torri sin Mariscos',
        photo: 'assets/img/zuppe/caldillo-de-congrio-sin-mariscos.jpg',
        description: '', 
        price: 14100
      },
      { 
        title: 'Minestrone', 
        photo: 'assets/img/zuppe/minestrone.jpg',
        description: '', 
        price: 9200
      },
      { 
        title: 'Cappelletti in brodo Due Torri', 
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 9900
      }];
  }

}
