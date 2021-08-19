import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppAddProductPageRoutingModule } from './app-add-product-routing.module';

import { AppAddProductPage } from './app-add-product.page';
import { SharedDataModule } from 'src/app/shared-data/shared-data.module';

@NgModule({
  imports: [
    CommonModule,
    SharedDataModule,
    IonicModule,
    AppAddProductPageRoutingModule
  ],
  declarations: [AppAddProductPage]
})
export class AppAddProductPageModule {}
