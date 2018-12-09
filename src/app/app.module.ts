import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, Injectable } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CreateComplaintPage } from '../pages/create-complaint/create-complaint';
import { TakePicturePage } from '../pages/take-picture/take-picture';
import { CreateComplaintDetailPage } from '../pages/create-complaint-detail/create-complaint-detail';
import { ViewComplaintPage } from '../pages/view-complaint/view-complaint';
import { LoginPage } from '../pages/login/login';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { SignupPage } from '../pages/signup/signup';
import { ProfilePage } from '../pages/profile/profile';
import { ProfileDetailsPage } from '../pages/profile-details/profile-details';
import { UpdateProfilePage } from '../pages/update-profile/update-profile';
import { UpdateComplaintPage } from '../pages/update-complaint/update-complaint';

const firebaseAuth = {
  apiKey: "AIzaSyCjZNRL-35x9Dw0kPQ_8kxZ49-IG8jSgcI",
  authDomain: "rupmc-d013b.firebaseapp.com",
  databaseURL: "https://rupmc-d013b.firebaseio.com",
  projectId: "rupmc-d013b",
  storageBucket: "rupmc-d013b.appspot.com",
  messagingSenderId: "811578000994"
};

@Injectable()
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CreateComplaintPage,
    TakePicturePage,
    CreateComplaintDetailPage,
    ViewComplaintPage,
    UpdateComplaintPage,
    LoginPage,
    SignupPage,
    ProfilePage,
    ProfileDetailsPage,
    UpdateProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CreateComplaintPage,
    TakePicturePage,
    CreateComplaintDetailPage,
    ViewComplaintPage,
    UpdateComplaintPage,
    LoginPage,
    SignupPage,
    ProfilePage,
    ProfileDetailsPage,
    UpdateProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen, Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
