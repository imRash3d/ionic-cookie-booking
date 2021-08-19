import { Component, OnInit } from '@angular/core';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/shared-data/services/product.service';
import { CommonService } from 'src/app/shared-data/services/common.service';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { StorageService } from 'src/app/shared-data/services/storage.service';
@Component({
  selector: 'app-app-add-product',
  templateUrl: './app-add-product.page.html',
  styleUrls: ['./app-add-product.page.scss'],
})
export class AppAddProductPage implements OnInit {

  productForm: FormGroup;
  imageUrl;
  isLoading;
  loader = false;
  editMode = false;
  productId;
  editImgUrl;
  categories = [];
  constructor(


    private route: ActivatedRoute,
    private fb: FormBuilder,
    private productService: ProductService,
    private commonServie: CommonService,
    private router: Router,


  ) {
    this.productForm = this.fb.group({
      ProductName: ["", Validators.required],
      Description: ["", Validators.required],
      Price: ["", Validators.required],
      TotalQty: ["", Validators.required],
      ImageUrl: ["", Validators.required],
      Category: ["", Validators.required]
    })
  }

  onUploadImageUrl(e) {
    if (e) {
      this.productForm.get('ImageUrl').setValue(e)
    }
  }

  ngOnInit() {
    this.productService.getproductCategory().subscribe(response => {
      if (response && response.result) {
        this.categories = response.data;
        console.log(this.categories)
      }
    })
    if (this.route.snapshot.params && this.route.snapshot.params.productId) {
      this.productId = this.route.snapshot.params.productId;
      this.productService.getproductDetail(this.productId).subscribe(response => {
        if (response.result) {
          this.productForm.patchValue(response.data);
          if(response.data.ImageUrl) {
            this.editImgUrl = response.data.ImageUrl;
          }
          this.editMode = true;
          console.log(  this.productForm.value)
        }
      })
    }


  }





  save() {
    this.loader = true;
    console.log(this.productForm.value);


    this.productForm.value.Price = Number(this.productForm.value.Price)
    this.productForm.value.TotalQty = Number(this.productForm.value.TotalQty)
    let obs$: Observable<any>;
    if (this.editMode) {
      obs$ = this.productService.updateProduct(this.productId, this.productForm.value)
    } else {
      obs$ = this.productService.addProduct(this.productForm.value)
    }
    console.log( this.productForm.value)
    obs$.subscribe(resposne => {
      console.log(resposne)

      this.commonServie.showMessage({ message: resposne.message }).then(r => {
        this.loader = true;
        if (resposne.result) {
          this.productService.isProductAdded$.next(true);
          this.router.navigate(['home']);
        }
      })
    }, err => {
      this.commonServie.showMessage({ message: "Something wrong !! Please try again  " }).then(r => {

      })
    })
  }

  p() {
    this.productService.isProductAdded$.next(true);
    this.router.navigate(['home']);
  }


}
