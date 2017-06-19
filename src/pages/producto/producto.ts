import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the Producto page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
  */
  @Component({
    selector: 'page-producto',
    templateUrl: 'producto.html'
  })
  export class ProductoPage {
    /* Current product */
    public product: { title: string, photo: string, description: string, price:any };
    /* All of products */
    public products: Array<{title: string, photo: string, description: string, price: any}>;
    /* Product after current product */
    public afterProduct: { title: string, photo: string, description: string, price:any };
    /* Product before current product */
    public beforeProduct: { title: string, photo: string, description: string, price:any };

    public hasAfterProduct: boolean;

    public hasBeforeProduct: boolean;

    public hasDescription: boolean;

    constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
      // Obtain the data
      let title = navParams.get('title');
      let photo = navParams.get('photo');
      let description = navParams.get('description');
      let price = navParams.get('price');
      let products = navParams.get('products');
      // Set the current product
      this.product = { 
        title:title, 
        photo:photo,
        description:description,
        price:price
      };
      this.hasDescription = false;
      if(this.product.description == '')
      {
        this.hasDescription = true;
      }
      // Set the section products
      this.products = products;
      // Get the index of the current product
      let currentProductIndex = products.findIndex(x => x.title == title);
      // If is the first product
      if(currentProductIndex == 0) {
        console.log('It must be happened');
        this.hasBeforeProduct = false;
        if(products.length > 1) {
          console.log(products);
          console.log('It must not be happened');
          this.hasAfterProduct = true;
          this.afterProduct = products[(currentProductIndex + 1)];
        } else {
          console.log('It must be happened')
          this.hasAfterProduct = false;
        }
        // If is the last product
      } else if(currentProductIndex == (products.length - 1)) {
        this.hasAfterProduct = false;
        this.hasBeforeProduct = true;
        this.beforeProduct = products[(currentProductIndex - 1)];
      } else {
        this.hasAfterProduct = true;
        this.hasBeforeProduct = true;
        this.afterProduct = products[(currentProductIndex + 1)];
        this.beforeProduct = products[(currentProductIndex - 1)];
      }
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad ProductoPage');
    }

    viewProduct(product, products, direction) {
      this.navCtrl.push(ProductoPage, {
        title: product.title,
        photo: product.photo,
        description: product.description,
        price: product.price,
        products: products,
      }, {animate: true, direction: direction}).then(() => {
        const currentIndex = this.viewCtrl.index;
        this.navCtrl.remove(currentIndex);
      });
    }

    swipeEvent(e) {
       if(e.direction == 2)
       {
         if(this.hasAfterProduct)
         {
           this.viewProduct(this.afterProduct, this.products, 'forward');
         }
       } 
       else if (e.direction == 4)
       {
         if(this.hasBeforeProduct)
         {
           this.viewProduct(this.beforeProduct, this.products, 'back');
         }
       }
    }

    leftClick() {
      console.log("derp");
        if(this.hasBeforeProduct)
         {
           this.viewProduct(this.beforeProduct, this.products, 'back');
         }
    }

    rightClick() {
         if(this.hasAfterProduct)
         {
           this.viewProduct(this.afterProduct, this.products, 'forward');
         }
    }

    backPage() {
      this.navCtrl.pop();
    }



  }
