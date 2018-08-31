import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  meal(){
    alert("Plano de alimentacao semanal")
  }

  videos(){
    alert("Relatorio de estadia do meu filho")
  }

  profile(){
    alert("Meus dados")
  }

  wallet(){
    alert("Minha conta")

  }
}
