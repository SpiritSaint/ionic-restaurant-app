import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the EntradasClassiche provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class EntradasClassiche {
  data: any;
  constructor(public http: Http) {
    this.data = [
      { 
        title: 'Gamberi in tante forme fritos', 
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 10950 
      },
      { 
        title: 'Prosciutto dello Stivale melón', 
        photo: 'assets/img/default.jpg',
        description: 'Jamón crudo italiano con melón', 
        price: 10950 
      },
      { 
        title: 'Prosciutto dello Stivale palmito', 
        photo: 'assets/img/default.jpg',
        description: 'Jamón crudo italiano con palmitos.', 
        price: 10950 
      },
      { 
        title: 'Carpaccio "Osteria Gustavo"', 
        photo: 'assets/img/default.jpg',
        description: 'Carpaccio de Filete de res.', 
        price: 7600 
      },
      { 
        title: 'Prosciuto dello Stivale parmesano', 
        photo: 'assets/img/entradas/prosciuto-dello-stivale.jpg',
        description: 'Jamón crudo italiano con queso parmesano.', 
        price: 13600 
      },
      { 
        title: 'La Caprese Di Sempre', 
        photo: 'assets/img/entradas/la-caprese-di-sempre.jpg',
        description: 'Mozarella de bufala fría, tomáte confitado y verduras al orégano.', 
        price: 10950 
      },
      { 
        title: 'Regine del Mare', 
        photo: 'assets/img/default.jpg',
        description: 'Clásico ostiones a la parmesana.', 
        price: 10850 
      },
      { 
        title: 'Costa "Del Miramonti"', 
        photo: 'assets/img/entradas/costa-del-miramonti.jpg',
        description: 'Clásicas machas a la parmesana.', 
        price: 10950 
      },
      { 
        title: 'Clásico del Cile', 
        photo: 'assets/img/entradas/clasico-del-cile.jpg',
        description: 'Locos al natural o apanados (según disponibilidad)', 
        price: 13600 
      },
      { 
        title: 'I Ricci di Mare', 
        photo: 'assets/img/entradas/i-ricci-di-mare.jpg',
        description: 'Erizos (según disponibilidad)', 
        price: 13600 
      },
      { 
        title: 'Calamari del Vecchio Mulino', 
        photo: 'assets/img/entradas/calamari-del-vecchio-mulino.jpg',
        description: 'Calamares a la romana (fritos)', 
        price: 8700 
      },
      { 
        title: 'Richezze della Costa', 
        photo: 'assets/img/entradas/richezze-della-costa.jpg',
        description: 'Sutridos de mariscos chilenos (para dos)', 
        price: 24450 
      },
      { 
        title: 'Tanti Formaggi', 
        photo: 'assets/img/default.jpg',
        description: 'Surtidos de quesos con frutos secos (para dos)', 
        price: 17850 
      },
      { 
        title: 'Carpaccio "Ostería Gustavo"', 
        photo: 'assets/img/default.jpg',
        description: 'Carpaccio de Filete de salmón.', 
        price: 7600 
      },
      { 
        title: 'Gamberi in tante forme al natural', 
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 10950 
      },
      { 
        title: 'Gamberi in tante forme al pil pil', 
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 10950 
      }
      ];
  }

}
