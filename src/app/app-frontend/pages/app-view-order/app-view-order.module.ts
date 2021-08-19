import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppViewOrderPageRoutingModule } from './app-view-order-routing.module';

import { AppViewOrderPage } from './app-view-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppViewOrderPageRoutingModule
  ],
  declarations: [AppViewOrderPage]
})
export class AppViewOrderPageModule {}
