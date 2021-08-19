import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppProductDetailPageRoutingModule } from './app-product-detail-routing.module';

import { AppProductDetailPage } from './app-product-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppProductDetailPageRoutingModule
  ],
  declarations: [AppProductDetailPage]
})
export class AppProductDetailPageModule {}
