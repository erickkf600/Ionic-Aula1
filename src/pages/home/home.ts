import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { IonicApp } from 'ionic-angular/components/app/app-root';

@IonicPage()

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  login(){
    this.navCtrl.setRoot('CategoriasPage');
  }

  cadastro(){
    this.navCtrl.push('CategoriasPage');
  }

}
