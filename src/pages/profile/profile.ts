import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Profile } from '../../models/profile';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { HomePage } from '../home/home';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  profileData: AngularFireList<any>
  profile = {} as Profile;
  uidref : string;
  constructor(private alertCtrl:AlertController, private fire: AngularFireAuth, private afDatabase: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    this.fire.authState.take(1).subscribe( data =>{
      this.profileData = this.afDatabase.list(`profile/${data.uid}`);
      this.uidref = data.uid;
      //console.log(this.uidref);
      })
  }
  
  alert(message: string){
    this.alertCtrl.create({
      title: 'Info!',
      subTitle:  message,
      buttons: ['OK']
    }).present();
  }

  createProfile(username,fName,nTel,cName,cNo,blockName,roomNo,uType){
   // console.log(username,fName,nTel,cName,cNo,blockName,roomNo,uType);
    /*  this.fire.authState.take(1).subscribe( auth =>{
      this.afDatabase.object(`profile/${auth.uid}`)
      .set({
        uid :  this.afDatabase.object(`profile/${auth.uid}`),
        username : this.profile.username,
        fName : this.profile.fName,
        nTel : this.profile.nTel,
        cName : this.profile.cName,
        cNo  : this.profile.cNo,
        blockName  : this.profile.blockName,
        roomNo  : this.profile.roomNo,
        uType  : this.profile.uType

      })

     
      
      .then(() => this.navCtrl.setRoot(HomePage));
      this.alert('Sucess! You have update complaint');
      
      }) */

      var createProfile = this.profileData.push({});
   
      createProfile.set({
        uid: this.uidref,
        id: createProfile.key,
        username : this.profile.username,
        fName : this.profile.fName,
        nTel : this.profile.nTel,
        cName : this.profile.cName,
        cNo  : this.profile.cNo,
        blockName  : this.profile.blockName,
        roomNo  : this.profile.roomNo,
        uType  : this.profile.uType,
        matricNo: this.profile.matricNo
      })
      
    .then(() => this.navCtrl.setRoot(HomePage));
    this.alert('Sucess! create profile');
    }
  }

  