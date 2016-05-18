import {Page,NavController, NavParams} from 'ionic-angular';
import {IonicApp, Modal, Alert} from 'ionic-angular';
import {MenuPage} from '../menu/menu';
import {ListPage} from '../list/list';
import {ProveedoresData} from '../../providers/proveedores';

/*import 'rxjs/add/operator/map';

import { Inject } from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {Http, Headers} from 'angular2/http';
import {Injectable} from 'angular2/core';*/
//import {ListPage} from '../../pages/list/list';


@Page({
  templateUrl: 'build/pages/restaurantes/restaurantes.html',
  providers: [ProveedoresData]

})
export class Restaurantes {
  private nav:NavController;
  private api: ProveedoresData;
  selectedItem:any;
  public locales;

  constructor(nav: NavController, data: ProveedoresData, navParams:NavParams) {
    this.nav = nav;
    this.api = data;
    this.locales = null;
    this.selectedItem = navParams.get('local');
    this.getLocales();
  }

  itemTapped(event, item) {
    this.nav.push(MenuPage, {
      item: item
    });
  }

//Obtenemos todos los datos de los locales
  getLocales() {
    this.api.getProveedores().subscribe(
         data => {
             this.locales = data.json().locales;
             console.log(this.locales);
         },
         err => console.error(err),
         () => console.log('getRepos completed')
     );
}

  //ir al menu del restaurante
  gotoMenu(local){
       this.nav.push(MenuPage,local);
  }
}
