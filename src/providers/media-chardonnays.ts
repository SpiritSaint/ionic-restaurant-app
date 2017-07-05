import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MediaChardonnays provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MediaChardonnays {
  data: any;
  constructor(public http: Http) {
  	this.data = [
      { 
        title: 'Casablanca Cefiro Reserva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 8900
      },
        {
            title: 'Santa Ema Select Terroir Reserve',
            photo: 'assets/img/default.jpg',
            description: '',
            price: 7400
        }
    ];
  }

}
