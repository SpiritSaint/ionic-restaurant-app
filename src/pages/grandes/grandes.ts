import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ProductoPage } from '../producto/producto';

import { GrandesVinos } from '../../providers/grandes-vinos';
/*
  Generated class for the Grandes page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-grandes',
  templateUrl: 'grandes.html',
  providers: [GrandesVinos]
})
export class GrandesPage {
  products: Array<{title: string, photo: string, description: string, price: any}>;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private grandesVinosProvider: GrandesVinos) {
     this.products = this.grandesVinosProvider.data;
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

}
