import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TragosScotch provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TragosScotch {
  data: any;
  constructor(public http: Http) {
    this.data = [
      { 
        title: 'Ballantines 12 Años',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 7600
      },
      { 
        title: 'Ballantines 17 Años',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 9800
      },
      { 
        title: 'Chivas Regal 12 Años',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 7600
      },
      { 
        title: 'Chivas Regal 18 Años',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 9800
      }
    ];
  }

}
