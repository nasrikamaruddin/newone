import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { UpdateComplaintPage } from '../update-complaint/update-complaint';

@IonicPage()
@Component({
  selector: 'page-view-complaint',
  templateUrl: 'view-complaint.html',
})
export class ViewComplaintPage {
  complaintData: Observable<any[]>;
  complaintDataRef: AngularFireList<any>;

  
  constructor(private alertCtrl:AlertController, private fire: AngularFireAuth, private afDatabase: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    
    this.fire.authState.take(1).subscribe( data =>{
      this.complaintData = this.afDatabase.list(`complaint/${data.uid}/`).valueChanges();
    console.log(data);
    });
    this.fire.authState.take(1).subscribe( data =>{
    this.complaintDataRef = this.afDatabase.list(`complaint/${data.uid}/`);
    });
  }

  fetchUser(uid){
    this.complaintData = this.afDatabase.list(`complaint/${uid}`).valueChanges();
    console.log (this.complaintData);
   
  }

  alert(message: string){
    this.alertCtrl.create({
      title: 'Info!',
      subTitle:  message,
      buttons: ['OK']
    }).present();
  }

  deleteComplaint(id){
    this.complaintDataRef.remove(id)
    .then ( msg=>{
      console.log(msg);
      console.log("Deleted data");
      this.alert('Sucess! You have deleted complaint');
      
    })
    .catch( e => {
      console.log(e);
      console.log("unsuccessful delete data");
    })
  }

  updateComplaint(id,title,publicDamage,description,date,time){
    console.log(id, title, publicDamage, description, date, time);
   this.navCtrl.push(UpdateComplaintPage,{
    id: id,
    title: title,
    publicDamage: publicDamage,
    description: description, 
    date: date, 
    time: time
   });
  }


}
