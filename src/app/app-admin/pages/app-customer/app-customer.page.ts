import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared-data/services/order.service';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-app-customer',
  templateUrl: './app-customer.page.html',
  styleUrls: ['./app-customer.page.scss'],
})
export class AppCustomerPage implements OnInit {
  loading;
  customers = [];
  constructor(
    private orderService: OrderService,
    public loadingController: LoadingController,) { }

  ngOnInit() {
    this.fetchData()
  }

  async fetchData(userId?) {
    this.loading = await this.loadingController.create({
    });
    this.loading.present();
    this.getCustomerList(userId);
  }


  getCustomerList(userId?) {


    this.orderService.getCustomers().subscribe(response => {
      this.loading.dismiss();
      if (response && response.result) {
        this.customers = response.Data;
    
        console.log(this.customers)
      }
    })
  }
}
