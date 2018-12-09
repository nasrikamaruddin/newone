import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { HomePage } from '../home/home';
import { User } from '../../models/user';
import { SignupPage } from '../signup/signup';
import { AngularFireList } from '@angular/fire/database';
import { ProfilePage } from '../profile/profile';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;
  profileData: AngularFireList<any>
  uidref : string;
  constructor(private alertCtrl:AlertController, private fire:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  alert(message: string){
    this.alertCtrl.create({
      title: 'Info!',
      subTitle:  message,
      buttons: ['OK']
    }).present();
  }

  goLogin(user: User){
   try{

      

    const result = this.fire.auth.signInAndRetrieveDataWithEmailAndPassword(user.emailUser, user.password);
    
      console.log('got some data', this.fire.auth.currentUser);
      this.alert('Sucess! You are logged in');

      if (result){
         this.navCtrl.setRoot(HomePage);
      }
      else{
        this.navCtrl.setRoot(LoginPage);
      }
      
      //user is login
    }
   
    catch (e) {
      console.log('got some error', e);
     
      this.alert(e.message);
    }
   // console.log("Username: "+user.emailUser + " Password: " + user.password);
    
  }
  goRegister(){
    this.navCtrl.push(SignupPage);
  }


}
