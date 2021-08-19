import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppAddCartPageRoutingModule } from './app-add-cart-routing.module';

import { AppAddCartPage } from './app-add-cart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppAddCartPageRoutingModule
  ],
  declarations: [AppAddCartPage]
})
export class AppAddCartPageModule {}
