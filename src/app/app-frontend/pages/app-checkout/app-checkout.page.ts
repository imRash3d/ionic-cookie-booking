import { Component, OnInit } from '@angular/core';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
import { AlertController, ModalController } from '@ionic/angular';
import { CartService, CartModel } from 'src/app/shared-data/services/cart.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared-data/core/services/auth.service';
import { OrderService } from 'src/app/shared-data/services/order.service';
import { CommonService } from 'src/app/shared-data/services/common.service';
import { AppGuestUserInputComponent } from '../app-guest-user-input/app-guest-user-input.component';
@Component({
  selector: 'app-app-checkout',
  templateUrl: './app-checkout.page.html',
  styleUrls: ['./app-checkout.page.scss'],
})
export class AppCheckoutPage implements OnInit {
  paymentAmount: string = '3.33';
  currency: string = 'AUD';
  currencyIcon: string = '$';
  deliveryAddress;
  userInfo;
  loader = false;
  paymentMethod='paypal'
  constructor(
    private payPal: PayPal,
    public alertController: AlertController,
    private cartService: CartService,
    private router: Router,
    private authService: AuthenticationService,
    private orderService: OrderService,
    private commonService: CommonService,
    public modalController: ModalController
  ) { }

  ngOnInit() {

    this.authService.loggedInuser.subscribe(resposne => {
      if (resposne) {
        this.userInfo = resposne;
        this.authService.getuserDetail(this.userInfo.UserId).subscribe(res => {
          console.log(res)
          if (res.result) {
            if (res.data.Address) {
              this.deliveryAddress = res.data.Address;
            }
          }
        })
      }


    })



  }
  payWithPaypal(orderModel, user, orderId) {
    console.log("Pay ????");
    this.payPal.init({
      PayPalEnvironmentProduction: 'AWz0-f3Fnq7PqnDMlyernpnTgz40Sd1Qi4scBN77BUwTZSCyTCONCYGsQIYkOJoPpCAzrED68FQIWLnC',
      PayPalEnvironmentSandbox: 'AWAGuEndkCdxRHqPhveTBUhMvq3lug4KN1RBs6HPayGeVPVkCu-IvUk95IaqMx2dIcrgpwAFKuZes4ja'
    }).then(() => {
      // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
      this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
        // Only needed if you get an "Internal Service Error" after PayPal login!
        //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
      })).then(() => {
        let payment = new PayPalPayment(this.paymentAmount, this.currency, 'Description', 'sale');
        this.payPal.renderSinglePaymentUI(payment).then((res) => {
          console.log(res);


          this.orderService.addOrder(orderModel).subscribe(res => {
            this.loader = false;
            if (res.result) {

              this.commonService.showMessage({ message: 'Order Placed successfully' }).then(r => {
                const data = {
                  Email: user.Email,
                  OrderId: orderId
                }
                this.authService.sendMail(data).subscribe(resM => {
                  console.log(resM)
                  this.cartService.clearCart().then(res => {
                    setTimeout(() => {
                      this.router.navigateByUrl('/success-order')
                    }, 500)

                  })
                })


              })
            } else {
              this.commonService.showMessage({ message: 'Order can not placed' }).then(r => {
              })
            }

          })


          // Successfully paid

          // Example sandbox response
          //
          // {
          //   "client": {
          //     "environment": "sandbox",
          //     "product_name": "PayPal iOS SDK",
          //     "paypal_sdk_version": "2.16.0",
          //     "platform": "iOS"
          //   },
          //   "response_type": "payment",
          //   "response": {
          //     "id": "PAY-1AB23456CD789012EF34GHIJ",
          //     "state": "approved",
          //     "create_time": "2016-10-03T13:33:33Z",
          //     "intent": "sale"
          //   }
          // }
        }, () => {
          this.commonService.showMessage({ message: 'Order can not placed !! . Check payment failed ' }).then(r => {
          })
        });
      }, () => {
        this.commonService.showMessage({ message: 'Order can not placed !! . Check payment failed ' }).then(r => {
        })
      });
    }, () => {
      this.commonService.showMessage({ message: 'Order can not placed !! . Check payment failed ' }).then(r => {
      })
      // Error in initialization, maybe PayPal isn't supported or something else
    });
  }


  async cancelOrder() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Cancel Order',
      message: 'Are you sure you want to cancel this order ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            //  console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {

            this.cartService.clearCart().then(res => {
              setTimeout(() => {
                this.router.navigateByUrl('/home')
              }, 500)

            })
          }
        }
      ]
    });

    await alert.present();
  }

  async opeGuestUserMdoel() {
    const modal = await this.modalController.create({
      component: AppGuestUserInputComponent,

    });

    modal.onDidDismiss().then((dataReturned) => {
      console.log(dataReturned)
      if (dataReturned && dataReturned.data) {
        const user = dataReturned.data;
        this.processOrderOrder(user)
      }

    });

    return await modal.present();
  }

  async showNotLoggedInModal() {




    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Order Confirm',
      message: 'Are you want to login or order as Guest user  ?',
      buttons: [
        {
          text: 'Login',
          role: 'cancel',
          cssClass: 'loginBtn',
          handler: (blah) => {
            this.router.navigateByUrl('/auth')
          }
        }, {
          text: 'Guest User Order',
          cssClass: 'guestOrder',
          handler: () => {
            this.opeGuestUserMdoel();
          }
        }
      ]
    });

    await alert.present();
  }
  async paceOrder() {

    if (!this.userInfo) {
      this.showNotLoggedInModal();
    } else {
      this.processOrderOrder(this.userInfo)
    }
    // console.log(this.userInfo)
  }


  processOrderOrder(user) {
    this.loader = true;
    const Carts = [];
    this.cartService.getCart().then(response => {
      if (response) {
        let subTotal = 0;
        let total = 0;
        const cartItems = JSON.parse(response);
        console.log(cartItems)

        cartItems.forEach((_item: CartModel) => {
          const cartObj = {
            ProductId: _item.Product.ItemId,
            OrderQuanity: _item.Quantity
          }
          Carts.push(cartObj);
          console.log(Number(_item.Quantity), Number(_item.Product.Price))
          subTotal += Number(_item.Quantity) * Number(_item.Product.Price);
        })

        if (subTotal > 0) {
          total = subTotal + 0
        }

        const orderId = Math.floor(Math.random() * 90000) + 10000;
        const orderModel = {
          OrderId: orderId,
          Address: this.deliveryAddress,
          Total: total,
          FirstName: user.FirstName,
          LastName: user.LastName,
          Email: user.Email,
          Carts: Carts,
          UserId: user.UserId
        };

        this.paymentAmount = String(total);
        this.payWithPaypal(orderModel, user, orderId)
      }
    })

  }
}
