import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductListViewPageRoutingModule } from './product-list-view-routing.module';

import { ProductListViewPage } from './product-list-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductListViewPageRoutingModule
  ],
  declarations: [ProductListViewPage]
})
export class ProductListViewPageModule {}
