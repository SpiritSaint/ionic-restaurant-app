import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ItalianosPremiums provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ItalianosPremiums {
  data: any;
  constructor(public http: Http) {
    this.data = [ 
      { 
        title: 'Rosso Di Montalcino D.O.C',
        photo: 'assets/img/default.jpg',
        description: 'Piancornello, Toscana Buen cuerpo; 14.5; intenso, elegante y de gran persistencia en boca.', 
        price: 39900
      },
      { 
        title: 'Chianti Melini D.O.C.G',
        photo: 'assets/img/default.jpg',
        description: 'Melini medio; 12.5º; perfecto con platos clásicos de pastas y carnes.', 
        price: 27500
      },
      { 
        title: 'Chianti Reserva Travignoli tegolaia D.O.C.G 375cc',
        photo: 'assets/img/default.jpg',
        description: 'Travignoli, Toscana Buen Cuerpo; 14º; Expresión clásica de sangiovese en bote grande.', 
        price: 22900
      },
      { 
        title: 'Chianti Reserva Travignoli tegolaia D.O.C.G 750cc',
        photo: 'assets/img/default.jpg',
        description: 'Travignoli, Toscana Buen Cuerpo; 14º; Expresión clásica de sangiovese en bote grande.', 
        price: 34900
      },
      { 
        title: 'Piluna Primitivo I.G.T',
        photo: 'assets/img/default.jpg',
        description: 'Castello Monaci, Puglia Cuerpo medio; 13.5º; notas a cerveza, chocolate, anís y fruta madura.', 
        price: 25120
      }];
  }

}
