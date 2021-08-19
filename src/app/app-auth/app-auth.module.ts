import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppAuthPageRoutingModule } from './app-auth-routing.module';

import { AppAuthPage } from './app-auth.page';
import { RegistrationPage } from './registration/registration.page';
import { LoginPage } from './login/login.page';
import { SharedDataModule } from '../shared-data/shared-data.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppAuthPageRoutingModule,
    SharedDataModule
  ],
  declarations: [AppAuthPage, RegistrationPage, LoginPage]
})
export class AppAuthPageModule {}
