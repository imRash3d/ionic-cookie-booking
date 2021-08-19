import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppCustomerPageRoutingModule } from './app-customer-routing.module';

import { AppCustomerPage } from './app-customer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppCustomerPageRoutingModule
  ],
  declarations: [AppCustomerPage]
})
export class AppCustomerPageModule {}
