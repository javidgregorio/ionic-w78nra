import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['home.css'],
  
})

export class HomePage {
  height: number;
  weight: number;
  idealweight: number;
  bmiMessage: string;
  gender: string;

constructor (public navCtrl: NavController) {}
}