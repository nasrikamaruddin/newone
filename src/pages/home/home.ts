import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  profileData: Observable<any>;
 
  myInput
  items
  constructor(private fire: AngularFireAuth, private afDatabase: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
  
    this.fire.authState.take(1).subscribe( data =>{
      this.profileData = this.afDatabase.list(`profile/${data.uid}/`).valueChanges();
    });

    
    this.getDataFromD();
  }

  getDataFromD(){
    this.afDatabase.list(`myItems/`).valueChanges().subscribe(_data =>{
     

      console.log(_data)
      this.items = _data
    })
  }

  click(){
    this.afDatabase.list(`myItems/`).push(this.myInput)
  }
 

  

}
