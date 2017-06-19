import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ActionSheetController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { InicioPage } from '../pages/inicio/inicio';
import { IndicePage } from '../pages/indice/indice';
import { TranslateService } from 'ng2-translate';
import { BuscadorPage } from '../pages/buscador/buscador';

import { RisottiPage } from '../pages/risotti/risotti';
import { CarniPage } from '../pages/carni/carni';
import { PescePage } from '../pages/pesce/pesce';
import { PastePage } from '../pages/paste/paste';
import { DolciPage } from '../pages/dolci/dolci';
import { BarPage } from '../pages/bar/bar';
import { CopasPage } from '../pages/copas/copas';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = InicioPage;

  pages: Array<{title: string, component: any}>;

  seleccioneUnIdioma: string;

  currentFlag: string;

  constructor(public platform: Platform, private translate: TranslateService, public actionSheetCtrl: ActionSheetController) {
    this.initializeApp();

    translate.addLangs(["po", "en", "es"]);
    translate.setDefaultLang('es');

    this.seleccioneUnIdioma = 'Seleccione un idioma';
    this.currentFlag = 'assets/img/flags/cl_mini.png';

    // used for an example of ngFor and navigation
    this.pages = [
    { title: 'Carta', component: IndicePage }
    ];
  }  

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  
  showLanguage()
  {
    let style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.flagChile {background: url("assets/img/flags/cl.png") no-repeat !important;padding-left:80px;height:80px}.flagBrazil {background: url("assets/img/flags/br.png") no-repeat !important;padding-left:80px;height:80px}.flagUsa {background: url("assets/img/flags/us.png") no-repeat !important;padding-left:80px;height:80px}';
    document.getElementsByTagName('head')[0].appendChild(style);
    let actionSheet = this.actionSheetCtrl.create({
      title: this.seleccioneUnIdioma,
      buttons: [
      {
        text: 'Español',
        handler: () => {
          this.translate.use('es');
          this.seleccioneUnIdioma = 'Seleccione un idioma';
          this.currentFlag = 'assets/img/flags/cl_mini.png';
        },
        cssClass: 'flagChile'
      },
      {
        text: 'English',
        handler: () => {
          this.translate.use('en');
          this.seleccioneUnIdioma = 'Select a language';
          this.currentFlag = 'assets/img/flags/us_mini.png';
        },
        cssClass: 'flagUsa'
      },
      {
        text: 'Portuguese',
        handler: () => {
          this.translate.use('po');
          this.seleccioneUnIdioma = 'Escolha o idioma';
          this.currentFlag = 'assets/img/flags/po_mini.png';
        },
        cssClass: 'flagBrazil'
      }
      ]
    });

    actionSheet.present();

    actionSheet.onDidDismiss(() => {
       style.parentNode.removeChild(style);
    })
  }

  openSearch() {
    let view = this.nav.getActive(); 
    if ( view.instance instanceof BuscadorPage ){
      
    } else {
      this.nav.push(BuscadorPage);
    }
  }

  showMenu() {

    let pasteText;
    let carniText;
    let pesceText;
    let risottiText;
    let dolciText;
    let barText;
    let vinosPorCopa;
    let message;
    if(this.seleccioneUnIdioma == 'Seleccione un idioma') {
      pasteText = 'Paste';
      carniText = 'Carni';
      pesceText = 'Pesce';
      risottiText = 'Risotti';
      dolciText = 'Dolci';
      barText = 'Bar';
      vinosPorCopa = 'Vinos por Copa';
      message = 'Menu';
    } else if (this.seleccioneUnIdioma == 'Select a language') {
      pasteText = 'Pasta';
      carniText = 'Steak';
      pesceText = 'Fishes';
      risottiText = 'Risotti';
      dolciText = 'Deserts';
      barText = 'Bar';
      vinosPorCopa = 'Vinos por Copa';
      message = 'What do you crave';
    } else {
      pasteText = 'Paste';
      carniText = 'Carnes';
      pesceText = 'Peixes';
      risottiText = 'Risotti';
      dolciText = 'Sobremesas';
      barText = 'Bar';
      vinosPorCopa = 'Vinos por copa';
      message = 'Acceso à Categoria';
    }
    let actionSheet = this.actionSheetCtrl.create({
      title: message,
      buttons: [
      {
        text: pasteText,
        handler: () => {
          let view = this.nav.getActive(); 
          if ( view.instance instanceof PastePage ){
            console.log("You can't stack the same view.")
          } else {
            console.log("PastePage will be rendered now.")
            this.nav.push(PastePage);
          }
        }
      },
      {
        text: carniText,
        handler: () => {
          let view = this.nav.getActive(); 
          if ( view.instance instanceof CarniPage ){
            console.log("You can't stack the same view.")
          } else {
            console.log("CarniPage will be rendered now.")
            this.nav.push(CarniPage);
          }
        }
      },
      {
        text: pesceText,
        handler: () => {
          let view = this.nav.getActive(); 
          if ( view.instance instanceof PescePage ){
            console.log("You can't stack the same view.")
          } else {
            console.log("PescePage will be rendered now.")
            this.nav.push(PescePage);
          }
        }
      },
      {
        text: risottiText,
        handler: () => {
          let view = this.nav.getActive(); 
          if ( view.instance instanceof RisottiPage ){
            console.log("You can't stack the same view.")
          } else {
            console.log("RisottiPage will be rendered now.")
            this.nav.push(RisottiPage);
          }
        }
      },
      {
        text: dolciText,
        handler: () => {
          let view = this.nav.getActive(); 
          if ( view.instance instanceof DolciPage ){
            console.log("You can't stack the same view.")
          } else {
            console.log("DolciPage will be rendered now.")
            this.nav.push(DolciPage);
          }
        }
      },
      {
        text: barText,
        handler: () => {
          let view = this.nav.getActive(); 
          if ( view.instance instanceof BarPage ){
            console.log("You can't stack the same view.")
          } else {
            console.log("BarPage will be rendered now.")
            this.nav.push(BarPage);
          }
        }
      },
      {
        text: vinosPorCopa,
        handler: () => {
          let view = this.nav.getActive(); 
          if ( view.instance instanceof CopasPage ){
            console.log("You can't stack the same view.")
          } else {
            console.log("CopasPage will be rendered now.")
            this.nav.push(CopasPage);
          }
        }
      }
      ]
    });

    actionSheet.present();
  }
  /*
   *
   */
  toggleBack() {
    if(this.nav.canGoBack()){
      this.nav.pop();
    }
  }
}

