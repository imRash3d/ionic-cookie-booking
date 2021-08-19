import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewProductDetailPageRoutingModule } from './view-product-detail-routing.module';

import { ViewProductDetailPage } from './view-product-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewProductDetailPageRoutingModule
  ],
  declarations: [ViewProductDetailPage]
})
export class ViewProductDetailPageModule {}
