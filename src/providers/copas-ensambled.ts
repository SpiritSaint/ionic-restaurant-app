import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CopasEnsambled provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CopasEnsambled {
  data: any;
  constructor(public http: Http) {
    this.data = [
      { 
        title: 'Von Siebenthal Parcela 7',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 6500
      }
    ];
  }

}
