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
        title: 'Cinzano Asti, Italiano',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 14200
      },
      { 
        title: 'Cinzano Prosecco, Italiano',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 14200
      },
      { 
        title: 'Prosecco D.O.C. BEL STAR, espumoso Brut',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 20800
      },
      { 
        title: 'Cono Sur Sparkling Brut',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 17500
      },
      { 
        title: 'Cuvee Rose BEL Start Espumosos Rosado Extra Dry',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 20800
      },
      { 
        title: 'Riccadonna Asti, Sparkling Wine, Italiano',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 8700
      },
      { 
        title: 'Freixenet Cordon Negro Brut',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 19650
      },
      { 
        title: 'Finca Flichman, Extra Brut',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 20750
      },
      { 
        title: 'Drappier Carte D´Or Brut',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 71250
      },
      { 
        title: 'Veuve Cliquot Brut',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 97700
      },
      { 
        title: 'Riccadona President, Brut, Italiano',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 19650
      }
    ];
  }

}
