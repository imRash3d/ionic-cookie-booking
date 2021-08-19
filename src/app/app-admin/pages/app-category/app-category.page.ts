import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/shared-data/services/product.service';
import { LoadingController } from '@ionic/angular';
import { CommonService } from 'src/app/shared-data/services/common.service';
@Component({
  selector: 'app-app-category',
  templateUrl: './app-category.page.html',
  styleUrls: ['./app-category.page.scss'],
})
export class AppCategoryPage implements OnInit {
  categoryForm: FormGroup;
  loading;
  categories = [];
  loader = false;
  
  constructor(
    private productService: ProductService,
    private fb: FormBuilder,
    public loadingController: LoadingController,
    private commonServie: CommonService
  ) {
    this.categoryForm = this.fb.group({
      CategoryName: ["", Validators.required],

    })
  }

  ngOnInit() {
    this.fetchData();
  }

  async fetchData(userId?) {
    this.loading = await this.loadingController.create({
    });
    this.loading.present();
    this.getCustomerList(userId);
  }


  getCustomerList(userId?) {


    this.productService.getproductCategory().subscribe(response => {
      this.loading.dismiss();
      if (response && response.result) {
        this.categories = response.data;

        console.log(this.categories)
      }
    })
  }

  save() {
    this.loader = true;
    const model = {
      CategoryName: String(this.categoryForm.value.CategoryName).toLowerCase()
    }


    this.productService.createProductCategory(model).subscribe(response => {
      this.loader = false;
      if (response.result) {
        this.categoryForm.reset();
        this.commonServie.showMessage({ message: response.message }).then(r => {
          this.fetchData();
          this.productService.isProductAdded$.next(true);
        })
      } else {
        this.commonServie.showMessage({ message: response.message }).then(r => {
        })
      }
    })
    console.log(model)
  }

}
