import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppCategoryPageRoutingModule } from './app-category-routing.module';

import { AppCategoryPage } from './app-category.page';
import { SharedDataModule } from 'src/app/shared-data/shared-data.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppCategoryPageRoutingModule,
    SharedDataModule
  ],
  declarations: [AppCategoryPage]
})
export class AppCategoryPageModule {}
