import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppAssignedOrderDetailPageRoutingModule } from './app-assigned-order-detail-routing.module';

import { AppAssignedOrderDetailPage } from './app-assigned-order-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppAssignedOrderDetailPageRoutingModule
  ],
  declarations: [AppAssignedOrderDetailPage]
})
export class AppAssignedOrderDetailPageModule {}
