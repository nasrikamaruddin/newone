import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../../models/user';
import { LoginPage } from '../login/login';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  user = {} as User;

  constructor(private alertCtrl:AlertController, private fire: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  alert(message: string){
    this.alertCtrl.create({
      title: 'Info!',
      subTitle:  message,
      buttons: ['OK']
    }).present();
  }

  async register(user: User){
    try{
      const result = await this.fire.auth.createUserAndRetrieveDataWithEmailAndPassword(user.emailUser, user.password)
    
      console.log('got data', result);
      this.navCtrl.setRoot(LoginPage);
      this.alert('Congratulation! You have been Registered!');
    }
    
    catch(e) {
      console.log('got an error', e);
      this.alert(e.message);
    }

    console.log('Would register user user with ', user.emailUser, user.password);
  }

  

}
