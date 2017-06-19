import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CopasEspumante provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CopasEspumante {
  data: any;
  constructor(public http: Http) {
    this.data = [
      { 
        title: 'Valdivieso Grand Brut',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 4300
      }
    ];
  }

}
