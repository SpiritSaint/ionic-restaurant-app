import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Carni provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Carni {
  data: any;
  constructor(public http: Http) {
    this.data = [
      { 
        title: 'Escaloppines de Pollo al Limón',
        photo: 'assets/img/carni/escalopines-de-pollo.jpg',
        description: 'Escalopin de pollo al vino o al limón.', 
        price: 9850
      }, 
      { 
        title: 'Milanesa de Pollo',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 10400 
      },
      { 
        title: 'Pollo al Mattone', 
        photo: 'assets/img/carni/pollo-al-mattone.jpg',
        description: 'Medio pollo grillado a las finas hierbas. (Precio no incluye acompañamiento, fotografía referencial)', 
        price: 11800
      },
      { 
        title: 'Asado de Tira en Cacerola', 
        photo: 'assets/img/carni/asado-de-tira-en-cacerola.jpg',
        description: 'Sobre queso Brie tibio y alcachofa horneadas. (Precio no incluye acompañamiento, fotografía referencial)', 
        price: 13500
      },
      { 
        title: 'Filete Parrilla', 
        photo: 'assets/img/default.jpg',
        description: '(Precio no incluye acompañante)', 
        price: 13150
      },
      { 
        title: 'Filete Paillard', 
        photo: 'assets/img/carni/fillete-paillard.jpg',
        description: 'Con ajo y romero.', 
        price: 13150
      },
      { 
        title: 'Filete Due Torri', 
        photo: 'assets/img/carni/filete-due-torri.jpg',
        description: 'Con salsa de hongos mixto, uva y tocino. (Precio no incluye acompañamiento, fotografía referencial)', 
        price: 10950 
      },
      { 
        title: 'Filete Mignon', 
        photo: 'assets/img/default.jpg',
        description: '(Precio no incluye acompañante)', 
        price: 14200
      },
      { 
        title: 'Escalopa Milanesa', 
        photo: 'assets/img/carni/escalopa-milanesa.jpg',
        description: 'De filete.', 
        price: 12850
      },
      { 
        title: 'Filete Chateau', 
        photo: 'assets/img/default.jpg',
        description: '(Precio no incluye acompañante)', 
        price: 15650
      },
      { 
        title: 'Escalopa Kayser', 
        photo: 'assets/img/default.jpg',
        description: 'De filete / Con jamón y queso.', 
        price: 13150
      },
      { 
        title: 'Filete Salsa Pimienta', 
        photo: 'assets/img/default.jpg',
        description: '(Precio no incluye acompañante)', 
        price: 13500
      },
      { 
        title: 'Escalopa Napoletana', 
        photo: 'assets/img/default.jpg',
        description: 'De filete.', 
        price: 13250
      },
      { 
        title: 'Filete Salsa Funghi', 
        photo: 'assets/img/default.jpg',
        description: '(Precio no incluye acompañante)', 
        price: 13500
      },
      { 
        title: 'Lomo Parrilla', 
        photo: 'assets/img/default.jpg',
        description: '(Precio no incluye acompañante)', 
        price: 12500
      },
      { 
        title: 'Escaloppines al Marsala', 
        photo: 'assets/img/carni/escalopines-al-marsala.jpg',
        description: '(Precio no incluye acompañante)', 
        price: 13000
      },
      { 
        title: 'Escaloppines al Vino Bianco', 
        photo: 'assets/img/default.jpg',
        description: '(Precio no incluye acompañante)', 
        price: 12350
      }];
  }

}
