import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared-data/core/services/auth.service';
import { Observable } from 'rxjs';
import { OrderService } from 'src/app/shared-data/services/order.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-app-order-list',
  templateUrl: './app-order-list.page.html',
  styleUrls: ['./app-order-list.page.scss'],
})
export class AppOrderListPage implements OnInit {
  isAdmin;
  loading;
  orderList = [];
  constructor(
    private authService: AuthenticationService,
    private orderService: OrderService,
    public loadingController: LoadingController,
    private router: Router) { }

  ngOnInit() {
    this.authService.loggedInuser.subscribe(resposne => {
      console.log('data', resposne)
      if (resposne && resposne.Role === 'customer') {
        this.fetchData(resposne.UserId);
      }
      if (resposne && resposne.Role === 'admin') {
        this.isAdmin = true;
        this.fetchData();

      }
    })
  }
  naviage(itemId) {
    this.router.navigateByUrl('order-detail/'+itemId)
  }




  async fetchData(userId?) {
    this.loading = await this.loadingController.create({
    });
    this.loading.present();
    this.getOrderList(userId);
  }


  getOrderList(userId?) {
    let obs: Observable<any>;
    if (this.isAdmin) {
      obs = this.orderService.getOrderList();
    } else {
      obs = this.orderService.getOrderListByUser(userId);
    }

    obs.subscribe(response => {
      this.loading.dismiss();
      if (response.result && response.data) {
        // this.orderList = response.data;
        this.orderList  =  response.data.sort((a, b) => a.CreatedDate - b.CreatedDate)
    
      }
    })
  }
}
