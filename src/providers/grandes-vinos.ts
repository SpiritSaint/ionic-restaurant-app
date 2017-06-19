import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GrandesVinos provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GrandesVinos {
  data: any;
  constructor(public http: Http) {
    this.data = [
      { 
        title: 'Caballo Loco Grand Cru Maipo',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 43800
      },
      { 
        title: 'Neyen Espíritu de Apalta',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 77850
      },
      { 
        title: 'Caballo Loco Grand Cru Apalta',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 43800
      },
      { 
        title: 'De Martino Familia Cabernet Sauvignon',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 77850
      },
      { 
        title: 'Almaviva',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 168900
      },
      { 
        title: 'Don Melchor',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 128300
      },
      { 
        title: 'Altair 2009',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 141550
      },
      { 
        title: 'Errázuriz Don Maximiano',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 127200
      },
      { 
        title: 'Tarapacá Etiqueta Azul',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 46000
      },
      { 
        title: 'Caballo Loco 15',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 86600
      },
      { 
        title: 'Matetic EQ Syrah',
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 50400
      }
    ];
  }

}
