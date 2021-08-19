import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppProductListPageRoutingModule } from './app-product-list-routing.module';

import { AppProductListPage } from './app-product-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppProductListPageRoutingModule
  ],
  declarations: [AppProductListPage]
})
export class AppProductListPageModule {}
