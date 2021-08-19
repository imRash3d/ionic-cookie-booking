import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppCheckoutPageRoutingModule } from './app-checkout-routing.module';

import { AppCheckoutPage } from './app-checkout.page';
import { PayPal } from '@ionic-native/paypal/ngx';
import { AppGuestUserInputComponent } from '../app-guest-user-input/app-guest-user-input.component';
import { SharedDataModule } from 'src/app/shared-data/shared-data.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppCheckoutPageRoutingModule,
    SharedDataModule
  ],
  providers:[PayPal],
  declarations: [AppCheckoutPage , AppGuestUserInputComponent]
})
export class AppCheckoutPageModule {}
