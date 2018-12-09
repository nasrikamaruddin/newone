import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateComplaintPage } from './create-complaint';

@NgModule({
  declarations: [
    CreateComplaintPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateComplaintPage),
  ],
})
export class CreateComplaintPageModule {}
