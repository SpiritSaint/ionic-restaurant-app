import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TragosPiscos provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TragosPiscos {
  data: any;
  constructor(public http: Http) {
    this.data = [
      { 
        title: 'Pisco Sour Nacional',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 4100
      },
      { 
        title: 'Alto del Carmen',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 4550
      },
      { 
        title: 'Horcón Quemado 40º',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 5900
      },
      { 
        title: 'Mistral 35º',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 4300
      },
      { 
        title: 'Mistral 46º',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 4700
      },
      { 
        title: 'Mistral Gran Nobel 40º',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 8300
      }
    ];
  }

}
