import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateComplaintDetailPage } from './create-complaint-detail';

@NgModule({
  declarations: [
    CreateComplaintDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateComplaintDetailPage),
  ],
})
export class CreateComplaintDetailPageModule {}
