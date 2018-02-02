import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private iab: InAppBrowser) {

  }
  launch() {
    const browser = this.iab.create('http://www.hespress.com/videos/349938.html');
    browser.show();
  }

}
