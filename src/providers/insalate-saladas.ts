import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the InsalateSaladas provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class InsalateSaladas {
  data: any;
  constructor(public http: Http) {
    this.data = [
      { 
        title: 'Del Granaio',
        photo: 'assets/img/insalate/del-granaio.jpg',
        description: 'Rúcula, tomate cherry, suprema de pollo envuelto en jamón crudo, queso Gruviere y almendra.', 
        price: 10250
      }, 
      { 
        title: 'Felicino',
        photo: 'assets/img/insalate/felicino.jpg',
        description: 'Salmón grillado con verduras, baby mix, salsa de atún.', 
        price: 10950 
      },
      { 
        title: 'Don Gustavo', 
        photo: 'assets/img/default.jpg',
        description: 'Congrio grillado con baby mix, tomate cherry y salsa de mostaza.', 
        price: 12100
      },
      { 
        title: 'Cesare "Due Torri"', 
        photo: 'assets/img/insalate/cesare-due-torri.jpg',
        description: 'Clásica César con centolla austral.', 
        price: 12350
      },
      { 
        title: 'Ensalada César Clásica', 
        photo: 'assets/img/insalate/cesar-clasica.jpg',
        description: '', 
        price: 8100
      },
      { 
        title: 'Tricolore', 
        photo: 'assets/img/insalate/tricolore.jpg',
        description: 'Rúcula, tomate cherry y parmesano.', 
        price: 8100
      },
      { 
        title: 'Ensalada César Camarones', 
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 10950 
      },
      { 
        title: 'Ensalada César Pollo', 
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 9450 
      }];
  }

}
