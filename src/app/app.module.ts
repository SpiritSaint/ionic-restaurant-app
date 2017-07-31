import { NgModule, ErrorHandler } from '@angular/core';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { InicioPage } from '../pages/inicio/inicio';
import { IndicePage } from '../pages/indice/indice';
import { NosotrosPage } from '../pages/nosotros/nosotros';
import { SugerenciasPage } from '../pages/sugerencias/sugerencias';
import { BarPage } from '../pages/bar/bar';

import { EntradasPage } from '../pages/entradas/entradas';
import { RisottiPage } from '../pages/risotti/risotti';
import { InsalatePage } from '../pages/insalate/insalate';
import { CarniPage } from '../pages/carni/carni';
import { ZuppePage } from '../pages/zuppe/zuppe';
import { PescePage } from '../pages/pesce/pesce';
import { PastePage } from '../pages/paste/paste';
import { DolciPage } from '../pages/dolci/dolci';

import { AnalcoholicoPage } from '../pages/analcoholico/analcoholico';
import { CafesPage } from '../pages/cafes/cafes';
import { AperitivosPage } from '../pages/aperitivos/aperitivos';
import { VinosPage } from '../pages/vinos/vinos';
import { CervezasPage } from '../pages/cervezas/cervezas';
import { TragosPage } from '../pages/tragos/tragos';

import { TintoPage } from '../pages/tinto/tinto';
import { BlancoPage } from '../pages/blanco/blanco';
import { ChampagnePage } from '../pages/champagne/champagne';
import { GrandesPage } from '../pages/grandes/grandes';
import { ItalianosPage } from '../pages/italianos/italianos';
import { MediaPage } from '../pages/media/media';
import { CopasPage } from '../pages/copas/copas';

import { ProductoPage } from '../pages/producto/producto';
import { BuscadorPage } from '../pages/buscador/buscador';

import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { TranslateModule } from "ng2-translate";

import { CommaPipe } from './comma.pipe';

import { EntradasBordeRio } from '../providers/entradas-borde-rio';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'e2e44847'
  }
};

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    IndicePage,
    NosotrosPage,
    SugerenciasPage,
    BarPage,
    EntradasPage,
    ProductoPage,
    RisottiPage,
    InsalatePage,
    CarniPage,
    ZuppePage,
    PescePage,
    PastePage,
    DolciPage,
    CommaPipe,
    AnalcoholicoPage,
    CafesPage,
    AperitivosPage,
    VinosPage,
    CervezasPage,
    TragosPage,
    TintoPage,
    BlancoPage,
    ChampagnePage,
    GrandesPage,
    ItalianosPage,
    MediaPage,
    BlancoPage,
    CopasPage,
    BuscadorPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
        platforms: {
            ios: {
                backButtonText: '',
            }
        }
    }),
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot(),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    IndicePage,
    NosotrosPage,
    SugerenciasPage,
    BarPage,
    EntradasPage,
    ProductoPage,
    RisottiPage,
    InsalatePage,
    CarniPage,
    ZuppePage,
    PescePage,
    PastePage,
    DolciPage,
    AnalcoholicoPage,
    CafesPage,
    AperitivosPage,
    VinosPage,
    CervezasPage,
    TragosPage,
    TintoPage,
    BlancoPage,
    ChampagnePage,
    GrandesPage,
    ItalianosPage,
    MediaPage,
    BlancoPage,
    CopasPage,
    BuscadorPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, EntradasBordeRio],
})
export class AppModule {}
