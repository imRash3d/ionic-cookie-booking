import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared-data/services/product.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-product-list-view',
  templateUrl: './product-list-view.page.html',
  styleUrls: ['./product-list-view.page.scss'],
})
export class ProductListViewPage implements OnInit {
  pCategories = [];
  productListSlider: Product[] = [];
  productList: Product[] = [];
  loading;
  categoryFilter;
  constructor(
    private router: Router,
    private productService: ProductService,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
 
    this.getProductCategory();
    this.productService.isProductAdded$.subscribe(res => {
      debugger
      if (res) {
        this.fetchData();
        this.getProductCategory();
      }
    })
    this.fetchData();
  }



  getProductCategory(){
    this.productService.getproductCategory().subscribe(response => {
      if (response && response.result) {
        this.pCategories = response.data;
        console.log(this.pCategories)
      }
    })
  }
  async reset() {
    if( this.categoryFilter){
   
      this.categoryFilter = '';
      this.getProductList(null);
  
    }
   
  }
  async fetchData() {
    this.loading = await this.loadingController.create({
    });
    this.loading.present();
    this.getFeatureProduct();
    this.getProductList();
  }
  getFeatureProduct() {
    this.productService.getProductList().subscribe(response => {
      this.loading.dismiss();
      if (response.result) {
        this.productListSlider = response.data;
        this.productListSlider = this.productListSlider.slice(0, 4)
 
      }
    })
  }
  getProductList(category?) {
    this.productService.getProductList(category).subscribe(response => {
  
      if (response.result) {
        this.productList = response.data;
        this.loading.dismiss();
      }
    })
  }

  async onChange(e) {
    this.loading = await this.loadingController.create({
    });
    this.loading.present();
    this.getProductList(e);
  }
  detail(itemId) {
    this.router.navigateByUrl('detail/' + itemId)
  }
  naviageCart() {
    this.router.navigateByUrl('/cart')
  }
  options = {
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: -60,
  };
  categories = {
    slidesPerView: 2.5,
  };
}

export interface Product {
  ItemId: string;
  ProductName: string;
  Description: string;
  Price: string;
  TotalQty: string;
  ImageUrl: string;
}