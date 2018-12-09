import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { HomePage } from '../home/home';
import { User } from '../../models/user';
import { SignupPage } from '../signup/signup';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { ProfilePage } from '../profile/profile';
import { ProfileDetailsPage } from '../profile-details/profile-details';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;
  profileData: AngularFireList<any>
  uidref : string;
  constructor(private afDatabase: AngularFireDatabase, private alertCtrl:AlertController, private fire:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
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
    
      //console.log('got some data', this.fire.auth.currentUser);
      this.alert('Sucess! You are logged in');
      this.getUserType(result, this.navCtrl);
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

  public getUserType(result, nav){
    this.fire.authState.subscribe( data =>{
      const userRef : firebase.database.Reference = this.afDatabase.database.ref(`profile/${data.uid}/`);

      userRef.on('value', userSnapshot => {
        userSnapshot.forEach(function(child){
          console.log(child.val());
          console.log(child.val()['uType']);

          if (result && child.val()['uType'] == 'student'){
            nav.setRoot(HomePage);
          }
          else if (result && child.val()['uType'] == 'admin'){
            nav.setRoot(ProfileDetailsPage);
          }
          //else if (result && child.val() != null){
          //  nav.setRoot(ProfilePage);
          //}
          else {
            nav.setRoot(LoginPage);
          }
        })
      })
      nav.setRoot(ProfilePage);
    })
    
  }


}
