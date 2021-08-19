import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppCustomerDetailPageRoutingModule } from './app-customer-detail-routing.module';

import { AppCustomerDetailPage } from './app-customer-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppCustomerDetailPageRoutingModule
  ],
  declarations: [AppCustomerDetailPage]
})
export class AppCustomerDetailPageModule {}
