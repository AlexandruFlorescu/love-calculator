import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  firstName: string;
  secondName: string;

  get score(){
    const letters = (this.firstName + this.secondName).toString().toLowerCase();
    let sum = 0;
    for (let i=0;i<letters.length; i++){
      sum += letters.charCodeAt(i);
    }
    return sum % 101;
  }

  constructor(public navCtrl: NavController) {

  }

}
