import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DolciPostres provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DolciPostres {
  data: any;
  constructor(public http: Http) {
    this.data = [
      { 
        title: 'Cioccolato e Amarene di Perugia', 
        photo: 'assets/img/dolce/cioccolato-e-amarene-di-perugia.jpg',
        description: 'Mousse de Chocolate y cerezas "Amarena Italiana"', 
        price: 5650
      },
      { 
        title: 'Crema Cotta di Don Luigi', 
        photo: 'assets/img/dolce/crema-cotta-di-don-luigi.jpg',
        description: 'Creme brule con chocolate especiado y manzanas al cardamomo.', 
        price: 5650
      },
      { 
        title: 'Panna Cotta del bosco', 
        photo: 'assets/img/dolce/panna-cotta-del-bosco.jpg',
        description: 'Con frutos del bosque.', 
        price: 5650
      },
      { 
        title: 'Sogni Proibiti', 
        photo: 'assets/img/dolce/sogni-proibiti.jpg',
        description: 'Strudel de frutas frescas con crema a la canela y su helado.', 
        price: 5650
      },
      { 
        title: 'Goloso ma Simpatico', 
        photo: 'assets/img/dolce/goloso-ma-simpatico.jpg',
        description: 'Mousse de Nutella giandulla italiana.', 
        price: 5650
      },
      { 
        title: 'Don Alfonso', 
        photo: 'assets/img/dolce/don-alfonso.jpg',
        description: 'Flan de vainilla y manjar.', 
        price: 5650
      },
      { 
        title: 'Della Suocera', 
        photo: 'assets/img/dolce/della-suocera.jpg',
        description: 'Cremoso chocolate suizo con frambuesa y su salsa.', 
        price: 5650
      },
      { 
        title: 'Freddo di estate', 
        photo: 'assets/img/dolce/freddo-di-state.jpg',
        description: 'Helados artesanales.', 
        price: 5650
      },
      { 
        title: 'Prima di dormire', 
        photo: 'assets/img/dolce/prima-di-dormire.jpg',
        description: 'Classica torta nuez manjar naranja Due Torri.', 
        price: 5650
      },
      { 
        title: 'Tiramisú Clásico', 
        photo: 'assets/img/dolce/tiramisu-clasico.jpg',
        description: 'Tiramisú di mascarpone.', 
        price: 5650
      },
      { 
        title: 'Colori di Stagione', 
        photo: 'assets/img/dolce/colori-di-stagione.jpg',
        description: 'Ensalada de frutas de la temporada.', 
        price: 5650
      },
      { 
        title: 'Torta Firenze', 
        photo: 'assets/img/dolce/torta-firenze.jpg',
        description: 'Crema inglesa, almendras, galletas de vino.', 
        price: 5650
      }];
  }

}
