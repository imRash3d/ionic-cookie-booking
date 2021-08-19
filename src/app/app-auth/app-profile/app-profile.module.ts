import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppProfilePageRoutingModule } from './app-profile-routing.module';

import { AppProfilePage } from './app-profile.page';
import { SharedDataModule } from 'src/app/shared-data/shared-data.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppProfilePageRoutingModule,
    SharedDataModule
  ],
  declarations: [AppProfilePage]
})
export class AppProfilePageModule {}
