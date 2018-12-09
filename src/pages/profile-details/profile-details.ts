import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { UpdateProfilePage } from '../update-profile/update-profile';

@IonicPage()
@Component({
  selector: 'page-profile-details',
  templateUrl: 'profile-details.html',
})
export class ProfileDetailsPage {
  profileData: Observable<any[]>;

  constructor(private fire: AngularFireAuth, private afDatabase: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
  
    this.fire.authState.take(1).subscribe( data =>{
      this.profileData = this.afDatabase.list(`profile/${data.uid}/`).valueChanges();
      console.log(data);
    });
    
  }
 
  goUpdateProfile(id,uid,uType,username,fName,matricNo,nTel,cName,cNo,blockName,roomNo){
   console.log(id,uid,uType,username,fName,matricNo,nTel,cName,cNo,blockName,roomNo);
    this.navCtrl.push(UpdateProfilePage,{
      id: id,
      uid: uid,
      uType: uType,
      username: username,
      fName: fName,
      matricNo: matricNo,
      nTel: nTel,
      cName: cName,
      cNo: cNo,
      blockName: blockName,
      roomNo: roomNo
     });
  }
 
  

}
