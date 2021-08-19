import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class CommonService {


    constructor(
        private toastController: ToastController

    ) { }


    parseResponse(response) {

        for (let key in response.Data) {
            console.log(key)
        }
    }

    downloadFileInSameWindow(fileUrl, fileName) { // download file in same window without open a new tab 


    }


    // downloadFileInSameWindow(file) { // download file in same window without open a new tab 
    //     this.createBlob(file.Url).then(res => {
    //         // console.log(res)
    //         const url = window.URL.createObjectURL(new Blob([res], { type: 'pdf' }));
    //         const systemName = file.SystemName;
    //         const link = document.createElement('a');
    //         document.body.appendChild(link);
    //         link.href = url;
    //         link.download = systemName;
    //         link.click();
    //         setTimeout(() => {
    //             window.URL.revokeObjectURL(url);
    //             document.body.removeChild(link);
    //         }, 0);
    //     });
    // }
    async createBlob(url) { // create blob file from download url

        const blob = await fetch(url).then(r => r.blob());
        return blob;

        // return fetch(url,{ mode: 'no-cors'}).then((response) => {
        //     return response.blob();
        // }).then(blob => {
        //     return URL.createObjectURL(blob);
        // });
    }


    async showMessage(data) {


        const toast = await this.toastController.create({
            message: data.message,
            duration: 2000
        });
        toast.present();


    }

    newGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}