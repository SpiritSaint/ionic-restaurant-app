import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the EntradasBordeRio provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class EntradasBordeRio {
  data: any;
  constructor(public http: Http) {
    this.data = [
      { 
        title: 'Caprese Due Torri',
        photo: 'assets/img/entradas/caprese-due-torri.jpg',
        description: 'Mozzarella de bufala tibia, albahaca, orégano y bruschetta.', 
        price: 11350
      },
      { 
        title: 'Gamberi Libornesa, una meraviglia',
        photo: 'assets/img/entradas/gamberi-libornesa.jpg',
        description: 'Camarones con salsa de tomates artesanal orégano y oliva.', 
        price: 11150
      },
      { 
        title: 'Mosaico del Nord', 
        photo: 'assets/img/entradas/mosaico-del-nord.jpg',
        description: 'Carpaccio de Pulpo con verduras salteadas al oliva.', 
        price: 9850
      },
      { 
        title: 'Belvedere', 
        photo: 'assets/img/entradas/belvedere.jpg',
        description: 'Frutos del mar en hojas de espinaca con salsa Aioli al orégano.', 
        price: 11300
      },
      { 
        title: 'La Castellana', 
        photo: 'assets/img/entradas/la-castellana.jpg',
        description: 'Mozarela de bufala a la milanesa con tomate baby mix.', 
        price: 10750
      },
      { 
        title: 'Rococo', 
        photo: 'assets/img/entradas/rococo.jpg',
        description: 'Rollitos de berenjenas grilladas con jaiba y sala Arrabiata.', 
        price: 11300
      },
      { 
        title: 'Mediterránea', 
        photo: 'assets/img/entradas/mediterranea.jpg',
        description: 'Láminas de Mozzarella con jamón crudo, rúculo y almendra.', 
        price: 12350
      },
      { 
        title: 'Re del Mare', 
        photo: 'assets/img/entradas/re-del-mare.jpg',
        description: 'Carpaccio de locos con camarones de río grilliados y salsa de queso ahumado.', 
        price: 11950
      }
      ];
  }
}
