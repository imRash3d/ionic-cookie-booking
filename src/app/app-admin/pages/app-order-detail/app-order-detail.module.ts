import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppOrderDetailPageRoutingModule } from './app-order-detail-routing.module';

import { AppOrderDetailPage } from './app-order-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppOrderDetailPageRoutingModule
  ],
  declarations: [AppOrderDetailPage]
})
export class AppOrderDetailPageModule {}
