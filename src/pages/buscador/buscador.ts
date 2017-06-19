import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ProductoPage } from '../producto/producto';

// Providers
import { Analcoholicos } from '../../providers/analcoholicos';
import { Aperitivos } from '../../providers/aperitivos';
import { BlancoChardonnays } from '../../providers/blanco-chardonnays';
import { BlancoSauvignon } from '../../providers/blanco-sauvignon';
import { Carni } from '../../providers/carni';
import { Cervezas } from '../../providers/cervezas';
import { Champagnes } from '../../providers/champagnes';
import { CopasCarbenets } from '../../providers/copas-carbenets';
import { CopasCarmenere } from '../../providers/copas-carmenere';
import { CopasChardonnays } from '../../providers/copas-chardonnays';
import { CopasEnsambled } from '../../providers/copas-ensambled';
import { CopasEspumante } from '../../providers/copas-espumante';
import { CopasMerlot } from '../../providers/copas-merlot';
import { CopasPinot } from '../../providers/copas-pinot';
import { CopasSauvignon } from '../../providers/copas-sauvignon';
import { CopasSyrah } from '../../providers/copas-syrah';
import { DolciBajosEnCalorias } from '../../providers/dolci-bajos-en-calorias';
import { DolciPostres } from '../../providers/dolci-postres';
import { EntradasBordeRio } from '../../providers/entradas-borde-rio';
import { EntradasClassiche } from '../../providers/entradas-classiche';
import { GrandesVinos } from '../../providers/grandes-vinos';
import { InsalateSaladas } from '../../providers/insalate-saladas';
import { ItalianosBlancos } from '../../providers/italianos-blancos';
import { ItalianosDulces } from '../../providers/italianos-dulces';
import { ItalianosFrizzantes } from '../../providers/italianos-frizzantes';
import { ItalianosIconos } from '../../providers/italianos-iconos';
import { ItalianosPremiums } from '../../providers/italianos-premiums';
import { MediaCarbenets } from '../../providers/media-carbenets';
import { MediaCarmenere } from '../../providers/media-carmenere';
import { MediaChardonnays } from '../../providers/media-chardonnays';
import { MediaSauvignons } from '../../providers/media-sauvignons';
import { PasteBordeRio } from '../../providers/paste-borde-rio';
import { PasteClassiche } from '../../providers/paste-classiche';
import { Pesce } from '../../providers/pesce';
import { RisottiClassici } from '../../providers/risotti-classici';
import { RisottiRisoArborio } from '../../providers/risotti-riso-arborio';
import { TintoCabernets } from '../../providers/tinto-cabernets';
import { TintoEnsamblajes } from '../../providers/tinto-ensamblajes';
import { TintoMerlots } from '../../providers/tinto-merlots';
import { TintoOtros } from '../../providers/tinto-otros';
import { TintoPinot } from '../../providers/tinto-pinot';
import { TintoSyrahs } from '../../providers/tinto-syrahs';
import { TragosGinebras } from '../../providers/tragos-ginebras';
import { TragosMaltWhisky } from '../../providers/tragos-malt-whisky';
import { TragosPiscosPeruanos } from '../../providers/tragos-piscos-peruanos';
import { TragosPiscos } from '../../providers/tragos-piscos';
import { TragosPremiumVodkas } from '../../providers/tragos-premium-vodkas';
import { TragosRon } from '../../providers/tragos-ron';
import { TragosScotch } from '../../providers/tragos-scotch';
import { TragosVodka } from '../../providers/tragos-vodka';
import { TragosWhisky } from '../../providers/tragos-whisky';
import { Zuppe } from '../../providers/zuppe';
/* 
  Generated class for the Buscador page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-buscador',
  templateUrl: 'buscador.html',
  providers: [
    Analcoholicos,
    Aperitivos,
    BlancoChardonnays,
    BlancoSauvignon,
    Carni,
    Cervezas,
    Champagnes,
    CopasCarbenets,
    CopasCarmenere,
    CopasChardonnays,
    CopasEnsambled,
    CopasEspumante,
    CopasMerlot,
    CopasPinot,
    CopasSauvignon,
    CopasSyrah,
    DolciBajosEnCalorias,
    DolciPostres,
    EntradasBordeRio,
    EntradasClassiche,
    GrandesVinos,
    InsalateSaladas,
    ItalianosBlancos,
    ItalianosDulces,
    ItalianosFrizzantes,
    ItalianosIconos,
    ItalianosPremiums,
    MediaCarbenets,
    MediaCarmenere,
    MediaChardonnays,
    MediaSauvignons,
    PasteBordeRio,
    PasteClassiche,
    Pesce,
    RisottiClassici,
    RisottiRisoArborio,
    TintoCabernets,
    TintoEnsamblajes,
    TintoMerlots,
    TintoOtros,
    TintoPinot,
    TintoSyrahs,
    TragosGinebras,
    TragosMaltWhisky,
    TragosPiscosPeruanos,
    TragosPiscos,
    TragosPremiumVodkas,
    TragosRon,
    TragosScotch,
    TragosVodka,
    TragosWhisky,
    Zuppe
  ]
})
export class BuscadorPage {
  searchQuery: string = '';
  items: string[];
  products: Array<{title: string, photo: string, description: string, price: any}>;
  foundedProducts: Array<{title: string, photo: string, description: string, price: any}>;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private analcoholicosProvider: Analcoholicos,
              private aperitivosProvider: Aperitivos,
              private blancoChardonnaysProvider: BlancoChardonnays,
              private blancoSauvignonProvider: BlancoSauvignon,
              private carniProvider: Carni,
              private cervezasProvider: Cervezas,
              private champagnesProvider: Champagnes,
              private copasCarbenetsProvider: CopasCarbenets,
              private copasCarmenereProvider: CopasCarmenere,
              private copasChardonnaysProvider: CopasChardonnays,
              private copasEnsambledProvider: CopasEnsambled,
              private copasEspumanteProvider: CopasEspumante,
              private copasMerlotProvider: CopasMerlot,
              private copasPinotProvider: CopasPinot,
              private copasSauvignonProvider: CopasSauvignon,
              private copasSyrahProvider: CopasSyrah,
              private dolciBajosEnCaloriasProvider: DolciBajosEnCalorias,
              private dolciPostresProvider: DolciPostres,
              private entradasBordeRioProvider: EntradasBordeRio,
              private entradasClassicheProvider: EntradasClassiche,
              private grandesVinosProvider: GrandesVinos,
              private insalateSaladasProvider: InsalateSaladas,
              private italianosBlancosProvider: ItalianosBlancos,
              private italianosDulcesProvider: ItalianosDulces,
              private italianosFrizzantesProvider: ItalianosFrizzantes,
              private italianosIconosProvider: ItalianosIconos,
              private italianosPremiumsProvider: ItalianosPremiums,
              private mediaCarbenetsProvider: MediaCarbenets,
              private mediaCarmenereProvider: MediaCarmenere,
              private mediaChardonnaysProvider: MediaChardonnays,
              private mediaSauvignonsProvider: MediaSauvignons,
              private pasteBordeRioProvider: PasteBordeRio,
              private pasteClassicheProvider: PasteClassiche,
              private pesceProvider: Pesce,
              private risottiClassiciProvider: RisottiClassici,
              private risottiRisoArborioProvider: RisottiRisoArborio,
              private tintoCabernetsProvider: TintoCabernets,
              private tintoEnsamblajesProvider: TintoEnsamblajes,
              private tintoMerlotsProvider: TintoMerlots,
              private tintoOtrosProvider: TintoOtros,
              private tintoSyrahsProvider: TintoSyrahs,
              private tragosGinebrasProvider: TragosGinebras,
              private tragosMaltWhiskyProvider: TragosMaltWhisky,
              private tragosPiscosPeruanosProvider: TragosPiscosPeruanos,
              private tragosPiscosProvider: TragosPiscos,
              private tragosPremiumVodkasProvider: TragosPremiumVodkas,
              private tragosRonProvider: TragosRon,
              private tragosScotchProvider: TragosScotch,
              private tragosVodkaProvider: TragosVodka,
              private tragosWhiskyProvider: TragosWhisky,
              private zuppeProvider: Zuppe) {
  	this.foundedProducts = [];
    this.products = [];
    this.products = this.products.concat(analcoholicosProvider.data);
    this.products = this.products.concat(aperitivosProvider.data);
    this.products = this.products.concat(blancoChardonnaysProvider.data);
    this.products = this.products.concat(blancoSauvignonProvider.data);
    this.products = this.products.concat(carniProvider.data);
    this.products = this.products.concat(cervezasProvider.data);
    this.products = this.products.concat(champagnesProvider.data);
    this.products = this.products.concat(copasCarbenetsProvider.data);
    this.products = this.products.concat(copasCarmenereProvider.data);
    this.products = this.products.concat(copasChardonnaysProvider.data);
    this.products = this.products.concat(copasEnsambledProvider.data);
    this.products = this.products.concat(copasEspumanteProvider.data);
    this.products = this.products.concat(copasMerlotProvider.data);
    this.products = this.products.concat(copasPinotProvider.data);
    this.products = this.products.concat(copasSauvignonProvider.data);
    this.products = this.products.concat(copasSyrahProvider.data);
    this.products = this.products.concat(dolciBajosEnCaloriasProvider.data);
    this.products = this.products.concat(dolciPostresProvider.data);
    this.products = this.products.concat(entradasBordeRioProvider.data);
    this.products = this.products.concat(entradasClassicheProvider.data);
    this.products = this.products.concat(grandesVinosProvider.data);
    this.products = this.products.concat(insalateSaladasProvider.data);
    this.products = this.products.concat(italianosBlancosProvider.data);
    this.products = this.products.concat(italianosDulcesProvider.data);
    this.products = this.products.concat(italianosFrizzantesProvider.data);
    this.products = this.products.concat(italianosIconosProvider.data);
    this.products = this.products.concat(italianosPremiumsProvider.data);
    this.products = this.products.concat(mediaCarbenetsProvider.data);
    this.products = this.products.concat(mediaCarmenereProvider.data);
    this.products = this.products.concat(mediaChardonnaysProvider.data);
    this.products = this.products.concat(mediaSauvignonsProvider.data);
    this.products = this.products.concat(pasteBordeRioProvider.data);
    this.products = this.products.concat(pasteClassicheProvider.data);
    this.products = this.products.concat(pesceProvider.data);
    this.products = this.products.concat(risottiClassiciProvider.data);
    this.products = this.products.concat(risottiRisoArborioProvider.data);
    this.products = this.products.concat(tintoEnsamblajesProvider.data);
    this.products = this.products.concat(tintoMerlotsProvider.data);
    this.products = this.products.concat(tintoOtrosProvider.data);
    this.products = this.products.concat(tintoSyrahsProvider.data);
    this.products = this.products.concat(tragosGinebrasProvider.data);
    this.products = this.products.concat(tragosMaltWhiskyProvider.data);
    this.products = this.products.concat(tragosPiscosPeruanosProvider.data);
    this.products = this.products.concat(tragosPiscosProvider.data);
    this.products = this.products.concat(tragosPremiumVodkasProvider.data);
    this.products = this.products.concat(tragosRonProvider.data);
    this.products = this.products.concat(tragosScotchProvider.data);
    this.products = this.products.concat(tragosVodkaProvider.data);
    this.products = this.products.concat(tragosWhiskyProvider.data);
    this.products = this.products.concat(zuppeProvider.data);
  }

  initializeItems() {
  	this.items = [];
  	this.foundedProducts = [];
  	this.products.forEach((product: any) => {
  		this.items.push(product.title);
  	})
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
      this.foundedProducts = this.products.filter((item) => {
      	return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  viewProduct(product, allOfProducts) {
      this.navCtrl.push(ProductoPage, {
        title: product.title,
        photo: product.photo,
        description: product.description,
        price: product.price,
        products: allOfProducts,
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscadorPage');
  }

}
