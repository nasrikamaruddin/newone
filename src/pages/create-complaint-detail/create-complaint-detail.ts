import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Complaint } from '../../models/complaint';
import { HomePage } from '../home/home';



@IonicPage()
@Component({
  selector: 'page-create-complaint-detail',
  templateUrl: 'create-complaint-detail.html',
})
export class CreateComplaintDetailPage {
 
  complaintData: AngularFireList<any>
  complaint = {} as Complaint;
  uid:any;
  
  constructor(private alertCtrl:AlertController, private fire: AngularFireAuth, private afDatabase: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    this.fire.authState.take(1).subscribe( data =>{
    this.complaintData = this.afDatabase.list(`complaint/${data.uid}`);
    })
  }

 
/*
  addComplaint(){
    var newComplaint = this.complaint.push({});
    newComplaint.set({
      id: newComplaint.key,
      title: this.title,
      publicDamage: this.publicDamage,
      description: this.description,
      date: this.date,
      time: this.time,
      status: this.status

    })
  }*/

  alert(message: string){
    this.alertCtrl.create({
      title: 'Info!',
      subTitle:  message,
      buttons: ['OK']
    }).present();
  }

  addComplaint(){
    var newComplaint = this.complaintData.push({});
   
          newComplaint.set({
            id: newComplaint.key,
            title: this.complaint.title,
            publicDamage: this.complaint.publicDamage,
            description: this.complaint.description,
            date: this.complaint.date,
            time: this.complaint.time,
            status: this.complaint.status
      
          })
          
        .then(() => this.navCtrl.setRoot(HomePage));
        this.alert('Sucess! You have create new complaint');
  }
  
   
  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateComplaintDetailPage');
  }

}
