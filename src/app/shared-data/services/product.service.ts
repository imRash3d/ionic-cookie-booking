import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http-with-injector/http.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    isProductAdded$ = new BehaviorSubject(null);
    API_URL = environment.API_URL;
    constructor(

        private http: HttpService
    ) { }


    uploadImage(fileInfo) {

        let formData = new FormData();
        formData.append('file', fileInfo);
        return this.http.post('storage/uploadImage', formData)
    }
    addProduct(data) {
        return this.http.post('product/create', data)
    }

    getProductList(category?) {
        let url = 'product'
        if(category){
            url =`product?category=${category}`
        }
        return this.http.get(url)
    }
    getproductDetail(_itemId) {
        return this.http.get('product/' + _itemId)
    }

    updateProduct(_itemId, data) {
        return this.http.post('product/' + _itemId, data)
    }
    deleteroduct(_itemId) {
        return this.http.delete('product/delete/' + _itemId)
    }
    getproductCategory() {
        return this.http.get('category');
    }
    createProductCategory(data) {
        return this.http.post('category/create', data)
    }
}