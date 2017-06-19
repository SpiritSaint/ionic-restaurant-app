import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PasteBordeRio provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PasteBordeRio {
  data: any;
  constructor(public http: Http) {
    this.data = [
      { 
        title: 'Sorrentino di Marostica', 
        photo: 'assets/img/pasta/sorrentino-di-marosca.jpg',
        description: 'Sorretinos de mozzarella, tomate, salsa de ostiones, limón con crema.', 
        price: 13650
      },
      { 
        title: 'Sorrentinos Livornesa', 
        photo: 'assets/img/pasta/sorrentino-livornesa.jpg',
        description: 'Sorrentinos de mozzarella, salsa de tomate artesanal, orégano, oliva.', 
        price: 11900 
      },
      { 
        title: 'Ravioloni de Loco Austral', 
        photo: 'assets/img/pasta/ravioli-de-loco-austral.jpg',
        description: 'Con salsa de centolla.', 
        price: 16850 
      },
      { 
        title: 'Lasagna Berengenos', 
        photo: 'assets/img/pasta/lasagna-berengenos.jpg',
        description: 'De berengenas, champiñones, pesto de albahaca y queso.', 
        price: 11900 
      },
      { 
        title: 'Paccheri', 
        photo: 'assets/img/pasta/paccheri.jpg',
        description: 'Tortellini rellenos de ossobuco con salsa de hongos mixtos arándanos y perejil.', 
        price: 13150 
      },
      { 
        title: 'Sapori del Sud', 
        photo: 'assets/img/pasta/sapori-del-sud.jpg',
        description: 'Fettuccine con crema al limón, centolla y ciboulette.', 
        price: 14800 
      },
      { 
        title: 'Luna Rossa', 
        photo: 'assets/img/pasta/luna-rossa.jpg',
        description: 'Fettuccine con camarones hierbas finas, zucchini y tomates frescos.', 
        price: 13000
      },
      { 
        title: 'Giorgone', 
        photo: 'assets/img/default.jpg',
        description: 'Gnocchi gratinados con salsa napolitana, orégano y quesos mozzarella.', 
        price: 11900 
      },
      { 
        title: 'Alla Caprese', 
        photo: 'assets/img/pasta/alla-caprese.jpg',
        description: 'Sorrentinos con tomate, mozzarella, albahaca, salsa de mantequilla y salvia.', 
        price: 11900
      },
      { 
        title: 'Ravioloni de Loco Luna Rossa', 
        photo: 'assets/img/pasta/ravioloni-de-loco-luna-rossa.jpg',
        description: 'Con camarones, zucchini y finas hierbas.', 
        price: 14900 
      },
      { 
        title: 'I Siciliani', 
        photo: 'assets/img/pasta/i-siciliani.jpg',
        description: 'Spaghetti salsa napolitana, berenjenas, alcaparras, anchoas, aceitunas, albahaca.', 
        price: 11900 
      },
      { 
        title: 'Rossi e Neri', 
        photo: 'assets/img/pasta/rossi-e-neri.jpg',
        description: 'Gnocchi rojo y negro con frutos del mar y hierbas finas.', 
        price: 14750 
      },
      { 
        title: 'Nascondino', 
        photo: 'assets/img/pasta/nascondino.jpg',
        description: 'Canelloni de crepes rellenos con mousse de alcachofa, salsa de camarones y quesos.', 
        price: 13650 
      },
      { 
        title: 'Cannelloni del 3 Tenori"', 
        photo: 'assets/img/pasta/cannelloni-del-3-tenori.jpg',
        description: 'Cannelloni gratinados de masas de gnocchi camarones queso.', 
        price: 13100 
      }
      ];
    console.log('Hello PasteBordeRio Provider');
  }

}
