import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { CreateComplaintDetailPage } from '../create-complaint-detail/create-complaint-detail';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-create-complaint',
  templateUrl: 'create-complaint.html',
})
export class CreateComplaintPage {
  profileData: Observable<any[]>;
  constructor(private fire: AngularFireAuth, private afDatabase: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
  
    this.fire.authState.take(1).subscribe( data =>{
      this.profileData = this.afDatabase.list(`profile/${data.uid}/`).valueChanges();
      console.log(data.uid);
    });
  }
  nextPage() {
    this.navCtrl.setRoot(CreateComplaintDetailPage);
  }
 


}
