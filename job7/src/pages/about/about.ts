import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { AlertProvider } from '../../providers/alert/alert';
import { LoginPage } from '../login/login';


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
  user = {
    'name':'',
    'email':''
    }
    response: any;



    constructor(
    public navCtrl: NavController,
    private authProvider : AuthProvider,
    private alertProvider : AlertProvider)
    {
    //mengambil data user dari local storage
    var user = JSON.parse(localStorage.getItem('user'));
    this.user.name = user.name;
    this.user.email = user.email;
    }
    //fungsi yang menangani permintaan logout
    //ke auth provider sekaligus mendapatkan response
    //dari server
    logout(){
    this.authProvider.logout().subscribe(
    result =>{
    this.response = result;
    this.alertProvider.showToast(this.response.message)
    this.navCtrl.push(LoginPage);
    }
    );
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}
