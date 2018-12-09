import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HomePage } from '../home/home';

/**
 * Generated class for the TakePicturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-take-picture',
  templateUrl: 'take-picture.html',
})
export class TakePicturePage {
  myPhoto:any;
  filesrc:any;
  file: any;
  home: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {
  
    
    this.home = [
      {  title:'Submit', component: HomePage }

    ];
  }
  homePage(home) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.setRoot(home.component);
  }

  takePhoto(){
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.myPhoto = imageData;
    }, (err) => {
     // Handle error
    });
  }

  
  getPhoto(){
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.myPhoto =  imageData;
    }, (err) => {
     // Handle error
    });
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad TakePicturePage');
  }

}
