import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppUploadImageComponent } from './components/app-upload-image/app-upload-image.component';




@NgModule({
    declarations: [AppUploadImageComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

    ],
    exports: [
     //   MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        AppUploadImageComponent
    ]
})
export class SharedDataModule { }
