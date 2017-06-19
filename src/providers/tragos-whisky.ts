import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TragosWhisky provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TragosWhisky {
  data: any;
  constructor(public http: Http) {
  	this.data = [
      { 
        title: 'Jack Daniel`s Honey',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 6500
      },
      { 
        title: 'Johnnie Walker Red Label',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 6500
      },
      { 
        title: 'Johnnie Walker Black Label',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 8700
      },
      { 
        title: 'Jack Daniel`s',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 6500
      }
    ];
  }

}
