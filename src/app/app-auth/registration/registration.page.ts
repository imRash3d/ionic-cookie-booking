import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../shared-data/core/services/auth.service';
import { CommonService } from '../../shared-data/services/common.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  @Output() OnloginClick = new EventEmitter();
  registrationForm: FormGroup
  loader = false;
  constructor(
    private commonService: CommonService,
    private fb: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    // private storageService: StorageService
  ) {
    this.registrationForm = this.fb.group({
      FirstName: ['', Validators.required,],
      LastName: ['', Validators.required,],
      Mobile: ['', Validators.required,],
      Role: ['client', Validators.required,],
      Email: ['', [Validators.compose([Validators.required, Validators.email])]],
      Password: ['', Validators.required],
      CfPassword: ['', Validators.required]
    })
  }
  ngOnInit() {
  }

  signUp() {

    if (this.registrationForm.valid && this.registrationForm.value.Password === this.registrationForm.value.CfPassword) {
      this.loader = true;
      const dataModel = {
        FirstName: this.registrationForm.value.FirstName.trim(),
        LastName: this.registrationForm.value.LastName.trim(),
        Mobile: this.registrationForm.value.Mobile.trim(),
        Role: 'client',
        Email: this.registrationForm.value.Email.trim(),
        Password: this.registrationForm.value.Password.trim(),
      };

      // this.loading = true;
      this.authenticationService
        .register(dataModel).subscribe((resposne: any) => {

          // console.log(resposne)
          //  this.loading = false;
          if (resposne.result) {
            const loginData = {
              Email: dataModel.Email,
              Password: dataModel.Password,
            }
            this.authenticationService.login(loginData).subscribe(loginRes => {
              this.loader = false;
              if (loginRes.result) {
                this.registrationForm.reset();
                this.router.navigate(['home']);
              } else {
                this.commonService.showMessage({ message: loginRes.message })
              }
            })
          } else {
            this.commonService.showMessage({ message: resposne.message })
          }
        },
          error => {
            this.commonService.showMessage({ message: 'Some thing wrong !! Failed to create user' })

          }
        );
    }

  }
}
