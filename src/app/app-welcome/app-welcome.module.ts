import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppWelcomePageRoutingModule } from './app-welcome-routing.module';

import { AppWelcomePage } from './app-welcome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppWelcomePageRoutingModule
  ],
  declarations: [AppWelcomePage]
})
export class AppWelcomePageModule {}
