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
        price: 11500
      },
      { 
        title: 'Fetuccine Alfredo',
        photo: 'assets/img/pasta/fetuccine-alfredo.jpg',
        description: 'Con crema y jamón.', 
        price: 10750
      },
      { 
        title: 'Fetuccine al salmón', 
        photo: 'assets/img/pasta/fetuccine-al-salmon.jpg',
        description: 'Con crema salmón y caviar.', 
        price: 13150
      },
      { 
        title: 'Fetuccine Nere alla Rusa', 
        photo: 'assets/img/pasta/fetuccine-nere-alla-rusa.jpg',
        description: 'Con vodka y centolla.', 
        price: 16900
      },
      { 
        title: 'Fettuccine al Funghi Porcini', 
        photo: 'assets/img/pasta/fetuccine-al-funghi-porcini.jpg',
        description: '', 
        price: 12750
      },
      { 
        title: 'Spaghetti Panna Mare', 
        photo: 'assets/img/pasta/spaghetti-panna-mare.jpg',
        description: 'Con crema natural y mariscos.', 
        price: 13050
      },
      { 
        title: 'Fetuccine al Roquefort', 
        photo: 'assets/img/pasta/fetuccine-al-roquefort.jpg',
        description: '', 
        price: 12750
      },
      { 
        title: 'Spaghetti Puttanesca', 
        photo: 'assets/img/pasta/spaghetti-putanesca.jpg',
        description: 'Carbonara - Matricciana - Napolitana - Ragú.', 
        price: 10650
      },
      { 
        title: 'Spaghetti al Filetto', 
        photo: 'assets/img/pasta/spaghetti-al-filetto.jpg',
        description: 'Filete, vino tinto, crema y ajo.', 
        price: 13050
      },
      { 
        title: 'Spaghetti Tutto Mare', 
        photo: 'assets/img/pasta/spaghetti-tutto-mare.jpg',
        description: 'Con salsa de tomate y mariscos.', 
        price: 13050
      },
      { 
        title: 'Ravioli Alfredo', 
        photo: 'assets/img/pasta/ravioli-alfredo.jpg',
        description: 'Con crema y jamón.', 
        price: 12200
      },
      { 
        title: 'Ravioli Napolitana o Bolognesa', 
        photo: 'assets/img/pasta/ravioli-bolognesa.jpg',
        description: 'Bolognesa.', 
        price: 11900
      },
      { 
        title: 'Capelletti Alfredo', 
        photo: 'assets/img/pasta/capelletti-alfredo.jpg',
        description: 'Con crema y jamón.', 
        price: 12100
      },
      { 
        title: 'Capelletti Bolagnesa', 
        photo: 'assets/img/pasta/capelletti-bolognesa.jpg',
        description: 'Un clásico italiano, esquisitos.', 
        price: 12100
      },
      { 
        title: 'Agnelotti Rosso Gamba', 
        photo: 'assets/img/pasta/agnelotti-rosso-gamba.jpg',
        description: 'Con napolitana y camarones.', 
        price: 13900
      },
      { 
        title: 'Gnocchi 4 Quesos Gratinados', 
        photo: 'assets/img/pasta/gnocchi-4-quesos-gratinados.jpg',
        description: '', 
        price: 12300
      },
      { 
        title: 'Agnelotti Panna e Funghi', 
        photo: 'assets/img/default.jpg',
        description: 'Con crema y champiñones.', 
        price: 13150
      },
      { 
        title: 'Gnocchi al Pesto', 
        photo: 'assets/img/pasta/gnocchi-al-pesto.jpg',
        description: 'Napolitana - Bolognesa', 
        price: 12100
      },
      { 
        title: 'Agnelotti Napoletana', 
        photo: 'assets/img/pasta/agnelotti-napoletana.jpg',
        description: 'Bolognesa.', 
        price: 12300
      },
      { 
        title: 'Agnelotti Due Torri', 
        photo: 'assets/img/pasta/agnelotti-due-torri.jpg',
        description: 'Con tomate fresco aceituna y oliva.', 
        price: 12650
      },
      { 
        title: 'Agnelotti Alle Noci', 
        photo: 'assets/img/pasta/agnelotti-alle-noci.jpg',
        description: 'Con salsa de nuez.', 
        price: 13000
      },
      { 
        title: 'Agnelotti Burro Salvia', 
        photo: 'assets/img/pasta/agnelotti-burro-salvia.jpg',
        description: 'Con mantequilla y salvia.', 
        price: 13000
      },
      { 
        title: 'Lasagna Due Torri Gratinada', 
        photo: 'assets/img/pasta/lasagna-due-torri-gratinada.jpg',
        description: '', 
        price: 11700
      },
      { 
        title: 'Penne la Arrabbiata', 
        photo: 'assets/img/pasta/penne-la-arrabbiata.jpg',
        description: 'Semi picante', 
        price: 11700
      },
      { 
        title: 'Tagliatella salsa Bolognesa o Napolitana', 
        photo: 'assets/img/pasta/tagliatelle-salsa-bolognesa-o-napolitana.jpg',
        description: '', 
        price: 9850
      },
      { 
        title: 'Tris di Pasta', 
        photo: 'assets/img/pasta/tris-di-pasta.jpg',
        description: '', 
        price: 13050
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
