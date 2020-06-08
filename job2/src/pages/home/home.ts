import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private myProfil: Profile;

 private nama: string = "Depandi Enda";
 private tglLahir: number[] = [22, 5, 1990];
 private kelas: [number, string] = [7, "A"];
 private matkul: any = 'Aplikasi Mobile Multi Platform';
 private dosen: any = true;
 data:any = {
 name: this.nama,
 birthdate: this.tglLahir,
 class: this.kelas,
 course: this.matkul,
 lecturer: this.dosen
 };

  constructor(public navCtrl: NavController) {
    this.myProfil = new Profile();
 this.myProfil.name = "Depandi Enda";
 this.myProfil.updated_time = new Date("2015-11-09");
 this.myProfil.quote = "Belajarlah segiat dan sekuat!";
 this.myProfil.like = 1000;
 this.myProfil.comments = 100;
 this.myProfil.last_active = 1.5; 
  }

  openAboutPage(){
    this.navCtrl.push(AboutPage, {profil: this.myProfil});
  }

}

export class Profile {
  name: string;
  updated_time: Date;
  quote: string;
  like: number;
  comments: number;
  last_active: number;
 }