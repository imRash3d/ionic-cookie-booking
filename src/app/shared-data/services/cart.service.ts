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
export class CartService {

    API_URL = environment.API_URL;
    constructor(
        private storage: Storage,
        private http: HttpService,
        private commonService: CommonService
    ) { }


    addTocart(product) {
        debugger
        this.getCart().then(response => {
            
            let carts = [];
            if (response) {
                carts = JSON.parse(response)
                console.log(carts)
            }
            const cart: CartModel = {
                Product: product,
                Quantity: 1,
                ItemId: this.commonService.newGuid()
            }
            carts.push(cart)
            this.saveCart(carts)
        })

    }
    getCart() {
        return this.storage.ready().then(() => {

            return this.storage.get('cart')
        })
    }

    saveCart(carts) {
        this.storage.set('cart', JSON.stringify(carts));
    }


    totalCart() {

    }

    async clearCart() {
        await this.storage.remove("cart");
    }

    cartQtyManage(type, ItemId) {
        return this.getCart().then(response => {
            let carts = [];
            if (response) {
                carts = JSON.parse(response)

                const cart: CartModel = carts.find(_item => _item.ItemId === ItemId);
                if (type === 'plus') {
                    cart.Quantity = cart.Quantity + 1;
                }
                if (type === 'minus' && cart.Quantity > 1) {
                    cart.Quantity = cart.Quantity - 1;
                }
            }

            console.log(carts)

            this.storage.set('cart', JSON.stringify(carts));
        })
    }

    deleteCartItem(ItemId) {
        return this.getCart().then(response => {
            let carts = [];
            if (response) {
                carts = JSON.parse(response)
                carts = carts.filter(_item => _item.ItemId !== ItemId)
                this.storage.set('cart', JSON.stringify(carts));
            }



        })
    }

}


export interface CartModel {
    Product: Product;
    ItemId: string;
    Quantity: number
}