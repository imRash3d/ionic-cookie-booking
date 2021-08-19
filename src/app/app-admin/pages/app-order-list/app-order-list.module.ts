import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppOrderListPageRoutingModule } from './app-order-list-routing.module';

import { AppOrderListPage } from './app-order-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppOrderListPageRoutingModule
  ],
  declarations: [AppOrderListPage]
})
export class AppOrderListPageModule {}
