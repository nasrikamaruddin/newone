import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Profile } from '../../models/profile';
import { Observable } from 'rxjs';
import { ProfileDetailsPage } from '../profile-details/profile-details';


@IonicPage()
@Component({
  selector: 'page-update-profile',
  templateUrl: 'update-profile.html',
})
export class UpdateProfilePage {

    
  profile = {} as Profile;
  profileData: Observable<any>;

  constructor(private alertCtrl:AlertController, private fire: AngularFireAuth, private afDatabase: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
  
   /* this.fire.authState.take(1).subscribe( data =>{
      this.profileData = this.afDatabase.object(`profile/${data.uid}`).valueChanges();
    
    });
    */
   this.fire.authState.take(1).subscribe( data =>{
    this.afDatabase.list(`profile/${data.uid}/`);

    this.profile.id = this.navParams.get('id')
    this.profile.username = this.navParams.get('username')
    this.profile.fName = this.navParams.get('fName')
    this.profile.nTel = this.navParams.get('nTel')
    this.profile.cName = this.navParams.get('cName')
    this.profile.cNo = this.navParams.get('cNo')
    this.profile.blockName = this.navParams.get('blockName')
    this.profile.roomNo = this.navParams.get('roomNo')
    this.profile.matricNo = this.navParams.get('matricNo')
    console.log( data.uid,this.profile.username);
    });
  }


  alert(message: string){
    this.alertCtrl.create({
      title: 'Info!',
      subTitle:  message,
      buttons: ['OK']
    }).present();
  }

 
  UpdateProfile(id,username,fName,matricNo,nTel,cName,cNo,blockName,roomNo){
    /* object update
    this.fire.authState.take(1).subscribe( auth =>{
      this.afDatabase.object(`profile/${auth.uid}/`).update(this.profile)
      
      .then(() => this.navCtrl.setRoot(ProfileDetailsPage));
      this.alert('Sucess! You have update profile');
    }) */

    this.fire.authState.take(1).subscribe( data =>{
      this.afDatabase.object(`profile/${data.uid}/${id}`)
      .update({
        username: this.profile.username,
        fName: this.profile.fName,
        matricNo: this.profile.matricNo,
        nTel: this.profile.nTel,
        cName: this.profile.cName,
        cNo: this.profile.cNo,
        blockName: this.profile.blockName,
        roomNo: this.profile.roomNo
      })
      
      .then(() => this.navCtrl.setRoot(ProfileDetailsPage));
      this.alert('Sucess! You have update profile');
      })
  }
  


}
