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
export class OrderService {


    constructor(

        private http: HttpService,
        private commonService: CommonService
    ) { }


  addOrder(data){
    return this.http.post('order/create', data)
  }

  getOrderList(){
    return this.http.get('order')
  }
  getOrderDetail(orderId){
    return this.http.get('order/'+orderId);
  }
  getOrderListByUser(userId){
    return this.http.get('order/userorder/'+userId)
  }
 
   changeOrderStatus(status,orderId){
      return this.http.post('order/'+orderId, {Status:status})
    }

    getCustomers(){
      return this.http.get('user')
    }
}


