import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared-data/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared-data/core/services/auth.service';
import { CartService, CartModel } from 'src/app/shared-data/services/cart.service';
import { CommonService } from 'src/app/shared-data/services/common.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-view-product-detail',
  templateUrl: './view-product-detail.page.html',
  styleUrls: ['./view-product-detail.page.scss'],
})
export class ViewProductDetailPage implements OnInit {
  product: Product;
  isCustomer = true;

  constructor(
    private authService: AuthenticationService,
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private commonService: CommonService,
    private router: Router,
    public alertController: AlertController
  ) { }

  ngOnInit() {

    this.authService.loggedInuser.subscribe(resposne => {
      console.log(resposne)
      if (resposne) {
        if (resposne.Role === 'admin') {
          this.isCustomer = false;
        }


      } else {

      }
    })
    const id = this.route.snapshot.params.id;

    this.productService.getproductDetail(id).subscribe(response => {
      if (response.result) {
        this.product = response.data;
        console.log(this.product)
      }
    })
  }

  addToCart() {



    // this.cartService.getCart().then(response => {
    //   debugger
    //   let carts: CartModel[] = [];
    //   if (response) {
    //     carts = JSON.parse(response)
    //   }
    //   const isExsit = carts.find(_item => _item.Product.ItemId === this.product.ItemId);
    //   if (!isExsit) {
    //     this.cartService.addTocart(this.product);
    //     this.commonService.showMessage({ message: "Product added in cart " }).then(r => {
    //       this.router.navigateByUrl('/home');
    //     })
    //   } else {
    //     this.commonService.showMessage({ message: "This product already exist in cart " }).then(r => {

    //     })
    //   }


    // })



  }


  editProduct() {

    this.router.navigateByUrl('edit/product/' + this.product.ItemId);
  }

  async deleteProduct() {
 
    this.presentAlert().then(re => {
      console.log(re)
    })
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Delete Product',
      message: 'Are you sure you want to delete this product ? This product can exist in order list . ',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
           this.productService.deleteroduct(this.product.ItemId).subscribe(response=> {
             if(response.result){
              this.commonService.showMessage({ message: "Product deleted successfully  " }).then(r => {
                this.productService.isProductAdded$.next(true);
                this.router.navigateByUrl('/home');
              })
             }else {
              this.commonService.showMessage({ message:response.message }).then(r => {

              })
             }
           })
          }
        }
      ]
    });

    await alert.present();
  }

}
export interface Product {
  ItemId: string;
  ProductName: string;
  Description: string;
  Price: string;
  TotalQty: string;
  ImageUrl: string;
}