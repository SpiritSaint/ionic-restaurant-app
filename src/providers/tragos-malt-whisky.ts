import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TragosMaltWhisky provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TragosMaltWhisky {
  data: any;
  constructor(public http: Http) {
    this.data = [
      { 
        title: 'Glenfiddich 12 Años',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 8700
      },
      { 
        title: 'Glenfiddich 18 Años',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 10900
      }
    ];
  }

}
