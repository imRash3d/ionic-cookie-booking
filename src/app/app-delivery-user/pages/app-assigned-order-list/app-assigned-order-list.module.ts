import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppAssignedOrderListPageRoutingModule } from './app-assigned-order-list-routing.module';

import { AppAssignedOrderListPage } from './app-assigned-order-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppAssignedOrderListPageRoutingModule
  ],
  declarations: [AppAssignedOrderListPage]
})
export class AppAssignedOrderListPageModule {}
