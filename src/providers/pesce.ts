import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Pesce provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Pesce {
  data: any;
  constructor(public http: Http) {
  	this.data = [
      { 
        title: 'Caldillo de Congrio Due Torri sin Mariscos',
        photo: 'assets/img/zuppe/caldillo-de-congrio-sin-mariscos.jpg',
        description: '', 
        price: 14900
      },
      { 
        title: 'Salmón a la Parrilla', 
        photo: 'assets/img/pesce/salmon-a-la-parrilla.jpg',
        description: '(Precio no incluye acompañamiento, fotografía referencial)', 
        price: 12900
      },
      { 
        title: 'Congrio a la Libornesa', 
        photo: 'assets/img/pesce/congrio-a-la-livornesa.jpg',
        description: '', 
        price: 14300
      },
      { 
        title: 'Caldillo Congrio Due Torri con Mariscos', 
        photo: 'assets/img/zuppe/caldillo-de-congrio-con-mariscos.jpg',
        description: '', 
        price: 16900
      },
      { 
        title: 'Salmón al Limone', 
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 12900
      },
      { 
        title: 'Corvina Genovese', 
        photo: 'assets/img/pesce/corvina-genovese.jpg',
        description: 'Con salsa de tomate cherry, orégano, aceituna, alcaparra. (Precio no incluye acompañamiento, fotografía referencial)', 
        price: 14600
      },
      { 
        title: 'Albacora Plancha Salsa Alcaparra', 
        photo: 'assets/img/pesce/albacora-salsa-de-alcaparra.jpg',
        description: '', 
        price: 13450
      },
      { 
        title: 'Albacora Salsa Limón', 
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 13450
      },
      { 
        title: 'Congrio a la Plancha', 
        photo: 'assets/img/pesce/congrio-plancha.jpg',
        description: '', 
        price: 13900
      },
      { 
        title: 'Tilapia Salsa Centollas', 
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 15200
      },
      { 
        title: 'Tilapia Meuniere Gambas', 
        photo: 'assets/img/pesce/tilapia-meuniere.jpg',
        description: '', 
        price: 14900
      },
      { 
        title: 'Tilapia a la Parrilla', 
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 12900
      },
      { 
        title: 'Tilapia Salsa Gambas', 
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 14500
      },
      { 
        title: 'Milanesa de Tilapia', 
        photo: 'assets/img/default.jpg',
        description: '(Precio no incluye acompañamiento, fotografía referencial)', 
        price: 16900
      },
      { 
        title: 'Congrio Meuniere con Gambas', 
        photo: 'assets/img/pesce/congrio-meuniere.jpg',
        description: '', 
        price: 14950
      },
      { 
        title: 'Congrio Frito', 
        photo: 'assets/img/pesce/congrio-frito.jpg',
        description: '', 
        price: 13900
      },
      { 
        title: 'Congrio Crocante Perlan', 
        photo: 'assets/img/pesce/congrio-perlan.jpg',
        description: '', 
        price: 13550
      },
      { 
        title: 'Congrio Margarita', 
        photo: 'assets/img/pesce/congrio-margarita.jpg',
        description: '', 
        price: 16900
      }]; 
  }

}
