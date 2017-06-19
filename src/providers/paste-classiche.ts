import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PasteClassiche provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PasteClassiche {
  data: any;
  constructor(public http: Http) {
    console.log('Hello PasteClassiche Provider');
    this.data = [
      { 
        title: 'Lasagna Due Torri',
        photo: 'assets/img/pasta/lasagna-due-torri.jpg',
        description: 'Con salsa bolognesa.', 
        price: 11150 
      },
      { 
        title: 'Fetuccine Alfredo',
        photo: 'assets/img/pasta/fetuccine-alfredo.jpg',
        description: 'Con crema y jamón.', 
        price: 10400
      },
      { 
        title: 'Fetuccine al salmón', 
        photo: 'assets/img/pasta/fetuccine-al-salmon.jpg',
        description: 'Con crema salmón y caviar.', 
        price: 12750
      },
      { 
        title: 'Fetuccine Nere alla Rusa', 
        photo: 'assets/img/pasta/fetuccine-nere-alla-rusa.jpg',
        description: 'Con vodka y centolla.', 
        price: 16650
      },
      { 
        title: 'Fettuccine al Funghi Porcini', 
        photo: 'assets/img/pasta/fetuccine-al-funghi-porcini.jpg',
        description: '', 
        price: 12350 
      },
      { 
        title: 'Spaghetti Panna Mare', 
        photo: 'assets/img/default.jpg',
        description: 'Con crema natural y mariscos.', 
        price: 12650 
      },
      { 
        title: 'Fetuccine al Roquefort', 
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 12350 
      },
      { 
        title: 'Spaghetti Puttanesca', 
        photo: 'assets/img/pasta/spaghetti-putanesca.jpg',
        description: 'Carbonara - Matricciana - Napolitana - Ragú.', 
        price: 10300 
      },
      { 
        title: 'Spaghetti al Filetto', 
        photo: 'assets/img/pasta/spaghetti-al-filetto.jpg',
        description: 'Filete, vino tinto, crema y ajo.', 
        price: 12650 
      },
      { 
        title: 'Spaghetti Tutto Mare', 
        photo: 'assets/img/pasta/spaghetti-tutto-mare.jpg',
        description: 'Con salsa de tomate y mariscos.', 
        price: 12650 
      },
      { 
        title: 'Ravioli Alfredo', 
        photo: 'assets/img/default.jpg',
        description: 'Con crema y jamón.', 
        price: 11800 
      },
      { 
        title: 'Ravioli Napolitana o Bolognesa', 
        photo: 'assets/img/pasta/ravioli-bolognesa.jpg',
        description: 'Bolognesa.', 
        price: 11550 
      },
      { 
        title: 'Capelletti Alfredo', 
        photo: 'assets/img/default.jpg',
        description: 'Con crema y jamón.', 
        price: 11700 
      },
      { 
        title: 'Capelletti Bolagnesa', 
        photo: 'assets/img/default.jpg',
        description: 'Un clásico italiano, esquisitos.', 
        price: 11700 
      },
      { 
        title: 'Agnelotti Rosso Gamba', 
        photo: 'assets/img/pasta/agnelotti-rosso-gamba.jpg',
        description: 'Con napolitana y camarones.', 
        price: 13450 
      },
      { 
        title: 'Gnocchi 4 Quesos Gratinados', 
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 11900
      },
      { 
        title: 'Agnelotti Panna e Funghi', 
        photo: 'assets/img/default.jpg',
        description: 'Con crema y champiñones.', 
        price: 12750
      },
      { 
        title: 'Gnocchi al Pesto', 
        photo: 'assets/img/pasta/gnocchi-al-pesto.jpg',
        description: 'Napolitana - Bolognesa', 
        price: 11700
      },
      { 
        title: 'Agnelotti Napoletana', 
        photo: 'assets/img/default.jpg',
        description: 'Bolognesa.', 
        price: 11900
      },
      { 
        title: 'Agnelotti Due Torri', 
        photo: 'assets/img/pasta/agnelotti-due-torri.jpg',
        description: 'Con tomate fresco aceituna y oliva.', 
        price: 12250
      },
      { 
        title: 'Agnelotti Alle Noci', 
        photo: 'assets/img/default.jpg',
        description: 'Con salsa de nuez.', 
        price: 12600
      },
      { 
        title: 'Agnelotti Burro Salvia', 
        photo: 'assets/img/default.jpg',
        description: 'Con mantequilla y salvia.', 
        price: 12600
      },
      { 
        title: 'Lasagna Due Torri Gratinada', 
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 11350
      },
      { 
        title: 'Penne la Arrabbiata', 
        photo: 'assets/img/default.jpg',
        description: 'Semi picante', 
        price: 11350
      },
      { 
        title: 'Tagliatella salsa Bolognesa o Napolitana', 
        photo: 'assets/img/default.jpg',
        description: '', 
        price: 9850
      },
      { 
        title: 'Tris di Pasta', 
        photo: 'assets/img/pasta/tris-di-pasta.jpg',
        description: '', 
        price: 12650
      },
      { 
        title: 'Tagliatelle Rosso bolognesa Due Torri', 
        photo: 'assets/img/pasta/tagliatelle-rosso-bolognesa-due-torri.jpg',
        description: 'Clásico italiano, esquisitos.', 
        price: 9850
      }
      ];
  }

}
