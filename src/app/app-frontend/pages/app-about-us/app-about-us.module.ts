import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppAboutUsPageRoutingModule } from './app-about-us-routing.module';

import { AppAboutUsPage } from './app-about-us.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppAboutUsPageRoutingModule
  ],
  declarations: [AppAboutUsPage]
})
export class AppAboutUsPageModule {}
