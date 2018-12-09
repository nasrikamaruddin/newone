import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Complaint } from '../../models/complaint';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { ViewComplaintPage } from '../view-complaint/view-complaint';


@IonicPage()
@Component({
  selector: 'page-update-complaint',
  templateUrl: 'update-complaint.html',
})
export class UpdateComplaintPage {
  complaint = {} as Complaint;
  complaintData: Observable<any>;
 
  
  constructor(private alertCtrl:AlertController, private fire: AngularFireAuth, private afDatabase: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
  
    this.fire.authState.take(1).subscribe( data =>{
      this.afDatabase.list(`complaint/${data.uid}/`);

      this.complaint.id = this.navParams.get('id')
      this.complaint.title = this.navParams.get('title')
      this.complaint.publicDamage = this.navParams.get('publicDamage')
      this.complaint.description = this.navParams.get('description')
      this.complaint.date = this.navParams.get('date')
      this.complaint.time = this.navParams.get('time')
   
  });

  }
  
  alert(message: string){
    this.alertCtrl.create({
      title: 'Info!',
      subTitle:  message,
      buttons: ['OK']
    }).present();
  }

  updateComplaint(id,title,publicDamage,description,date,time){
   // console.log(id,title,publicDamage,description,date,time);
   // this.fire.authState.take(1).subscribe( data =>{
   // const itemsRef =  this.afDatabase.list(`complaint/`);
    // to get a key, check the Example app below
     // itemsRef.update(this.complaint.$key, { 
   
    //  title: this.complaint.title,
    //  publicDamage: this.complaint.publicDamage,
    //  description: this.complaint.description,
     // date: this.complaint.date,
   //   time: this.complaint.time

   //   });
   // })

   this.fire.authState.take(1).subscribe( data =>{
    this.afDatabase.object(`complaint/${data.uid}/${id}`)
    .update({
      id : this.complaint.id,
      title : this.complaint.title,
      publicDamage : this.complaint.publicDamage,
      description : this.complaint.description,
      date : this.complaint.date,
      time  : this.complaint.time
    })
    
    .then(() => this.navCtrl.setRoot(ViewComplaintPage));
    this.alert('Sucess! You have update complaint');
    })
  } 
}
