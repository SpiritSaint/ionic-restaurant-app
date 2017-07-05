import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DolciBajosEnCalorias provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DolciBajosEnCalorias {
  data: any;
  constructor(public http: Http) {
    this.data = [
      { 
        title: 'Strudel con Helado Hipocalórico',
        photo: 'assets/img/default.jpg',
        description: '40 Hidratos de Carbono más 10 Hidratos de Carbono del Helado.', 
        price: 6550
      },
      { 
        title: 'Terrina Helada con Galletas de Chocolate',
        photo: 'assets/img/dolce/terrina-helada-con-galletas-de-chocolate.jpg',
        description: '61 Hidratos de Carbono.', 
        price: 6550
      }];  
  }

}
