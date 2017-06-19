import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MediaSauvignons provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MediaSauvignons {
  data: any;
  constructor(public http: Http) {
    this.data = [
      { 
        title: 'Santa Rita Medalla Real',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 8700
      },
      { 
        title: 'Matetic Corralillo',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 10900
      }
    ];
  }

}
