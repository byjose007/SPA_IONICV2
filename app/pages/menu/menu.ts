import {Page, NavController, NavParams} from 'ionic-angular';
import {ProveedoresData} from '../../providers/proveedores';

@Page({
  templateUrl: 'build/pages/menu/menu.html'
})
export class MenuPage {
  /*private nav:NavController;
  private api:ProveedoresData;
  selectedItem:any;
  public locales;*/
  public local;

  constructor(private nav: NavController, private navParams: NavParams) {
    /*this.nav = nav;
    this.api = data;
    this.locales = null;
    this.selectedItem = navParams.get('item');
    this.getMenus();*/
    this.nav = nav;
    this.navParams = navParams;
    this.local = navParams.data;

  }

/*
  itemTapped(event, item) {
    this.nav.push(MenuPage, {
      item: item
    });
  }


  getMenus() {
    this.api.getProveedores().subscribe(
         data => {
             this.locales = data.json().locales;
             console.log(this.locales);
         },
         err => console.error(err),
         () => console.log('getRepos completed')
     );
  }*/

}
