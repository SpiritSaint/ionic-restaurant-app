import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RisottiClassici provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RisottiClassici {
  data: any;
  constructor(public http: Http) {
  	this.data = [
      { 
        title: 'Risotto ai Funghi Porcini',
        photo: 'assets/img/risotti/risotto-al-funghi-porcini.jpg',
        description: '', 
        price: 12350
      }, 
      { 
        title: 'Tris di Risotto',
        photo: 'assets/img/risotti/tris-di-risotti.jpg',
        description: '', 
        price: 12650 
      },
      { 
        title: 'Risotto ai Quatro Formaggi', 
        photo: 'assets/img/risotti/rissoti-ai-quatro-formaggi.jpg',
        description: '', 
        price: 11950
      },
      { 
        title: 'Risotto Nero di Seppia', 
        photo: 'assets/img/risotti/risotto-nero-di-sepia.jpg',
        description: '', 
        price: 12450
      },
      { 
        title: 'Risotti ai Funghi', 
        photo: 'assets/img/risotti/risotto-al-funghi.jpg',
        description: '', 
        price: 11950
      },
      { 
        title: 'Risotto Scampi con gambas', 
        photo: 'assets/img/risotti/risotto-scampi.jpg',
        description: '', 
        price: 12650
      },
      { 
        title: 'Risotto Tutto Mare', 
        photo: 'assets/img/risotti/risotto-tutto-mare.jpg',
        description: '', 
        price: 12650 
      }
      ];
    console.log('Hello RisottiClassici Provider');
  }

}
