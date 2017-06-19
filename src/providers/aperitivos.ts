import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Aperitivos provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Aperitivos {
  data: any;
  constructor(public http: Http) {
  	this.data = [
      { 
        title: 'Tequila Olmeca Extra Añejo',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 4800
      },
      { 
        title: 'Whisky Sour',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 6500 
      },
      { 
        title: 'Daikiri', 
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 5400
      },
      { 
        title: 'Margarita', 
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 5400 
      },
      { 
        title: 'Tequila Margarita', 
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 5400 
      },
      { 
        title: 'Caipiriña', 
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 5400 
      },
      { 
        title: 'Manhattan', 
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 5000 
      },
      { 
        title: 'Vodka Naranja', 
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 5400 
      },
      { 
        title: 'Bailey´s Tradicional', 
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 7600 
      },
      { 
        title: 'Apple Martini', 
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 6400 
      },
      { 
        title: 'Jerez Tio Pepe', 
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 6350 
      },
      { 
        title: 'Cointreau', 
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 8550 
      },
      { 
        title: 'Mojito Clásico', 
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 5400 
      },
      { 
        title: 'Drambuie', 
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 7200 
      },
      { 
        title: 'Mojito Coco', 
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 5400 
      },
      { 
        title: 'Fernet Branca', 
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 5000 
      },
      { 
        title: 'Mojito Frutilla', 
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 5400 
      },
      { 
        title: 'Cognac Rémy Martin V.S.O.P', 
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 16400 
      },
      { 
        title: 'Menta Marie Brizard', 
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 8700 
      },
      { 
        title: 'Mojito Naranja', 
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 5400 
      },
      { 
        title: 'Cosmopolitan', 
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 6500 
      }
      ];
  }

}
