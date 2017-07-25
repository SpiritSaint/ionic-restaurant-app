import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Cervezas provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Cervezas {
  data: any;
  constructor(public http: Http) {
    this.data = [
      { 
        title: 'Kunstmann Lager',
        photo: 'assets/img/bar/cervezas/cerveza.jpg',
        description: '', 
        price: 3850
      },
      { 
        title: 'Kunstmann Pale Ale',
        photo: 'assets/img/bar/cervezas/cerveza.jpg',
        description: '', 
        price: 3850 
      },
      { 
        title: 'Guayacán Golden Ale (Elqui)', 
        photo: 'assets/img/bar/cervezas/cerveza.jpg',
        description: '', 
        price: 3950
      },
      { 
        title: 'Kunstmann sin alcohol', 
        photo: 'assets/img/bar/cervezas/cerveza.jpg',
        description: '', 
        price: 3850
      },
      { 
        title: 'Menabrea, ITALIA 1846, Birra Lager', 
        photo: 'assets/img/bar/cervezas/cerveza.jpg',
        description: '', 
        price: 4750 
      },
      { 
        title: 'Austral Lager', 
        photo: 'assets/img/bar/cervezas/cerveza.jpg',
        description: '', 
        price: 3850
      },
      { 
        title: 'Estrella Damm (Barcelona)', 
        photo: 'assets/img/bar/cervezas/cerveza.jpg',
        description: '', 
        price: 3950
      },
      { 
        title: 'Austral Patagona', 
        photo: 'assets/img/bar/cervezas/cerveza.jpg',
        description: '', 
        price: 3850 
      },
      { 
        title: 'Menabrea, ITALIA 150, Aniversario Birra Amber', 
        photo: 'assets/img/bar/cervezas/cerveza.jpg',
        description: '', 
        price: 4750 
      },
      { 
        title: 'Austral Calafate', 
        photo: 'assets/img/bar/cervezas/cerveza.jpg',
        description: '', 
        price: 3850 
      },
      { 
        title: 'Voll Damm 7.2º (Barcelona)', 
        photo: 'assets/img/bar/cervezas/cerveza.jpg',
        description: '', 
        price: 3950 
      },
      { 
        title: 'Inedit By Ferrán Adriá (Barcelona)', 
        photo: 'assets/img/bar/cervezas/cerveza.jpg',
        description: '', 
        price: 3950 
      },
      { 
        title: 'Daura Sin Glutén (Barcelona)', 
        photo: 'assets/img/bar/cervezas/cerveza.jpg',
        description: '', 
        price: 3950 
      },
      { 
        title: 'Heineken', 
        photo: 'assets/img/bar/cervezas/cerveza.jpg',
        description: '', 
        price: 3450
      },
      { 
        title: 'Budweiser', 
        photo: 'assets/img/bar/cervezas/cerveza.jpg',
        description: '', 
        price: 3450
      },
      { 
        title: 'Mestra Lager Pilsen', 
        photo: 'assets/img/bar/cervezas/cerveza.jpg',
        description: '', 
        price: 3950 
      }
      ];
  }

}
