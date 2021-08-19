import { Component, OnInit } from '@angular/core';
import { CartService, CartModel } from 'src/app/shared-data/services/cart.service';
import { CommonService } from 'src/app/shared-data/services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-add-cart',
  templateUrl: './app-add-cart.page.html',
  styleUrls: ['./app-add-cart.page.scss'],
})
export class AppAddCartPage implements OnInit {

  cartItems: CartModel[] = [];
  subTotal = 0;
  total = 0;
  deliveryCarge = 2;
  loader = true;
  constructor(
    private router:Router,
    private commonService: CommonService,
    private cartService: CartService) { }

  ngOnInit() {
    this.getCartItems();
  }
  getCartItems() {
   
    this.cartService.getCart().then(response => {
      this.loader = false;
      if (response) {
        this.subTotal =0;
        this.total =0;
        this.cartItems = JSON.parse(response);
        console.log(this.cartItems)

        this.cartItems.forEach(_item => {
          console.log(Number(_item.Quantity), Number(_item.Product.Price))
          this.subTotal += Number(_item.Quantity) * Number(_item.Product.Price);
        })

        if (this.subTotal > 0) {
          this.total = this.subTotal + this.deliveryCarge;
        }
      }
    })
  }

  addQuantity(cart: CartModel) {
    //  console.log(cart)

    this.cartService.cartQtyManage('plus', cart.ItemId).then(res => {
      this.reloadCart()
    })

  }
  removeQuantity(cart) {

    this.cartService.cartQtyManage('minus', cart.ItemId).then(res => {
      this.reloadCart()
    })
  }

  checkout() {
    this.router.navigateByUrl('/checkout')
  }
  deleteCart(cart) {
    //   console.log(cart)

    this.cartService.deleteCartItem(cart.ItemId).then(res => {

      this.commonService.showMessage({ message: "Item Deleted Successfully " }).then(r => {
        this.reloadCart()
      })
    })

  }

  reloadCart() {
    setTimeout(_ => {
      this.getCartItems()
    }, 500)
  }
}
