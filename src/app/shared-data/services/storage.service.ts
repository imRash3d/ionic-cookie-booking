import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http-with-injector/http.service';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { CommonService } from './common.service';
import { Product } from 'src/app/app-frontend/pages/view-product-detail/view-product-detail.page';
@Injectable({
    providedIn: 'root'
})
export class StorageService {


    constructor(

        private http: HttpService,
        private commonService: CommonService
    ) { }


    uploadImage(formData) {
        // // const data = {
        // //     file: fileInfo
        // // }
        // let formData = new FormData();
        // formData.append('file', fileInfo);
        return this.http.post('storage/uploadImage', formData)
    }
    upProfileImage(formData) {
        // const data = {
        //     file: fileInfo
        // }
        // let formData = new FormData();
        // formData.append('file', fileInfo);
        return this.http.post('storage/upload-profile-pic', formData)
    }

}


