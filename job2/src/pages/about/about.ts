import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Profile } from '../home/home';


/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  model: Profile;
  
  recvName: string;
  recvBirthDate: number[];
  recvClass: [number, string];
  recvCourse: any;
  recvLecturer: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.recvName = this.navParams.get("name");
 this.recvBirthDate = this.navParams.get("birthdate");
 this.recvClass = this.navParams.get("class");
 this.recvCourse = this.navParams.get("course");
 this.recvLecturer = this.navParams.get("lecturer");
 console.log(this.recvName);
 var j:any;
 for(j in this.recvBirthDate) {
 console.log(this.recvBirthDate[j]);
 }
 for(j in this.recvClass) {
 console.log(this.recvClass[j]);
 }
 console.log(this.recvCourse);
 console.log(this.recvLecturer);
 if(this.recvLecturer)
 this.recvLecturer = "Dosen"
 else
 this.recvLecturer = "Anda Bukan Dosen"
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}
