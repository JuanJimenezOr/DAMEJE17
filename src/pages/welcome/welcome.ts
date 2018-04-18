import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Sports } from "./../sports/sports";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  Irsports():void{
      this.navCtrl.push(Sports);
  }

}
