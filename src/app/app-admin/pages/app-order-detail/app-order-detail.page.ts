import { Component, OnInit } from '@angular/core';
import { CartService, CartModel } from 'src/app/shared-data/services/cart.service';
import { CommonService } from 'src/app/shared-data/services/common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/shared-data/services/order.service';
import { AuthenticationService } from 'src/app/shared-data/core/services/auth.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-app-order-detail',
  templateUrl: './app-order-detail.page.html',
  styleUrls: ['./app-order-detail.page.scss'],
})
export class AppOrderDetailPage implements OnInit {

  subTotal = 0;
  total = 0;
  deliveryCarge = 0;
  isAdmin = false;
  order;
  loading;
  orderStatus;
  orderId;
  constructor(
    private authService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
    private commonService: CommonService,
    public loadingController: LoadingController,
    private orderService: OrderService) { }

  ngOnInit() {
    this.authService.loggedInuser.subscribe(resposne => {
      if (resposne && resposne.Role === 'admin') {
        this.isAdmin = true;
      }
      this.fetchData();
    })

  }

  async fetchData() {
    this.loading = await this.loadingController.create({
    });
    this.loading.present();
    this.getOrderItem();
  }


  getOrderItem() {
    this.orderId = this.route.snapshot.params.id;
    this.orderService.getOrderDetail(this.orderId).subscribe(response => {
      this.loading.dismiss();
      if (response.result) {
        this.order = response.data;
        this.subTotal = 0;
        this.total = 0;


      }
    })



  }


  compareWithFn = (o1, o2) => {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  };

  compareWith = this.compareWithFn;
  onChange(status) {
    this.orderService.changeOrderStatus(status, this.orderId).subscribe(response => {
      console.log(response )
      if(response.result){
        this.commonService.showMessage({ message: 'Order status updated successfully' }).then(r => {
          this.fetchData();
        })
      }
    })

  }
}
