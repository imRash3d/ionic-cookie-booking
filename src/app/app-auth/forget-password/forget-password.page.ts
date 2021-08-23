import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared-data/core/services/auth.service';
import { CommonService } from 'src/app/shared-data/services/common.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage implements OnInit {

  loader = false;
  postData = {
    username: '',
    password: ''
  };

  passwordForm: FormGroup;
  changePasswordForm: FormGroup;
  isShowChangePasswordForm = false;
  isShowEmailForm = true;
  constructor(
    private commonServie: CommonService,
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthenticationService,
    // private storageService: StorageService
  ) {
    this.passwordForm = this.fb.group({
      Email: ['', Validators.required],
    })
    this.changePasswordForm = this.fb.group({
      Password: ['', Validators.required],
      VerificationCode: ['', Validators.required],
    })
  }

  ngOnInit() {

  }


  submit() {
    this.loader = true;
    const dataModel = {
      Email: String(this.passwordForm.value.Email.trim()).toLowerCase(),
    }
    this.authService.forgetPassword(dataModel)
      .subscribe((response: any) => {
        this.loader = false;
        if (!response.Success) {
          this.commonServie.showMessage({ message: response.ErrorMessage }).then(r => {

          })
        } else {
          this.isShowEmailForm = false;
          this.isShowChangePasswordForm = true;
        }
      }, err => {
        this.commonServie.showMessage({ message: err.ErrorMessage }).then(r => {
          this.loader = false;
        })
      })
  }


  setPassword() {
    this.loader = true;
    const dataModel = {
      Password: this.changePasswordForm.value.Password.trim(),
      VerificationCode: this.changePasswordForm.value.VerificationCode.trim(),
      Email: String(this.passwordForm.value.Email.trim()).toLowerCase(),

    }
    this.authService.setNewPassword(dataModel)
      .subscribe((response: any) => {
        this.loader = false;
        if (!response.Success) {
          this.commonServie.showMessage({ message: response.ErrorMessage }).then(r => {

          })
        } else {
          this.router.navigateByUrl('/auth')
        }
      }, err => {
        this.commonServie.showMessage({ message: err.ErrorMessage }).then(r => {
          this.loader = false;
        })
      })
  }
}
