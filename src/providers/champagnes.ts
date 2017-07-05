import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Champagnes provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Champagnes {
  data: any;
  constructor(public http: Http) {
    this.data = [
      { 
        title: 'Cono Sur Sparklin Brut',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 12900
      },
      { 
        title: 'Cono Sur Sparkling Brut, 375ml.',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 9200
      },
      { 
        title: 'Chandon Brut',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 21600
      },
      { 
        title: 'Freixenet Cordon Negro Brut',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 18900
      },
      { 
        title: 'Riccadonna Asti, Sparkling Wine, Italiano, 200ml',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 8900
      },
      { 
        title: 'Riccadonna Asti, Italiano',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 21900
      },
      { 
        title: 'Riccadonna Prosecco, Italiano',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 21900
      },
      { 
        title: 'Chandon Brut, 187ml.',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 9600
      },
      { 
        title: 'Veuve Cliquot Brut, 375ml.',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 56800
      },
      { 
        title: 'Chandon Demi Sec',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 21600
      },
      { 
        title: 'Chandon Rose',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 23900
      }
    ];
  }

}
