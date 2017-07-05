import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RisottiRisoArborio provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RisottiRisoArborio {
  data: any;
  constructor(public http: Http) {
    this.data = [
      { 
        title: 'Del Bosco', 
        photo: 'assets/img/risotti/del-bosco.jpg',
        description: 'Risotto de hongos porcini y avellana tostada.', 
        price: 13050
      },
      { 
        title: 'Limoncillo', 
        photo: 'assets/img/risotti/limoncillo.jpg',
        description: 'Risotto de ostiones, zeste de limón y salsa de albahaca.', 
        price: 13900
      },
      { 
        title: 'Del Pescatore Riso', 
        photo: 'assets/img/risotti/del-pescatore-riso.jpg',
        description: 'Risotto con lo mejor de nuestro mar. Versión natural o con tomate.', 
        price: 13900
      },
      { 
        title: 'Di Recco', 
        photo: 'assets/img/risotti/di-recco.jpg',
        description: 'Risotto ai cuatro formaggi, alcachofa y tocino.', 
        price: 12350
      },
      { 
        title: 'Palermitano', 
        photo: 'assets/img/risotti/palermitano.jpg',
        description: 'Risotto con salsa putanesca sobre berenjena a la parmesana.', 
        price: 13050
      },
      { 
        title: 'Di Alberto', 
        photo: 'assets/img/risotti/di-alberto.jpg',
        description: 'Risotto con ciruelas secas, manzanas, frutillas y de 4 quesos.', 
        price: 12350
      }];
}

}
