import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppContactUsPageRoutingModule } from './app-contact-us-routing.module';

import { AppContactUsPage } from './app-contact-us.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppContactUsPageRoutingModule
  ],
  declarations: [AppContactUsPage]
})
export class AppContactUsPageModule {}
