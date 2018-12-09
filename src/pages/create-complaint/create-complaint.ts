import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { CreateComplaintDetailPage } from '../create-complaint-detail/create-complaint-detail';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

@IonicPage()
@Component({
  selector: 'page-create-complaint',
  templateUrl: 'create-complaint.html',
})
export class CreateComplaintPage {

  constructor(private fire: AngularFireAuth, private afDatabase: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
  
  }
  nextPage() {
    this.navCtrl.setRoot(CreateComplaintDetailPage);
  }
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateComplaintPage');
  }

}
