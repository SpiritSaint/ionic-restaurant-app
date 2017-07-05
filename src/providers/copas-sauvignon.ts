import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CopasSauvignon provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CopasSauvignon {
  data: any;
  constructor(public http: Http) {
    this.data = [
      { 
        title: 'Sauvignon Blanc',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 5500
      }
    ];
  }

}
